
**scan:** 
eg: 

> input$ ----- 1 ---- 3 ---- 5 -----|--->

> scan( ( acc, cur ) => acc + cur, 0)

> -------------1------4------9------|--->

**Encadenamiento de operadores**

# Sección 6: Operadores no tan comunes

**take:** toma el número de iteraciones de un observable que se le indique

**first:** cuando el observable emite el primer valor con first() solo toma el primer valor y finaliza 
otra condicion que se le puede poner es que ```` first(x => x>+10) ````

**takeWhile:** Permite recibir valores mientras la condición se cumpla
    takeWhile( ({ y }) => y<=150) // cuando la condición sea mayor a 150 no imprime, pero en el caso que se desee imprimir el valor que rompe la condición se utiliza INCLISIVE

**takeUntil:** es un observador que recibe como parámetro otro observable.

Sigue recibiendo y emitiendo los valores del primer observable hasta que el segundo observable emita su primer valor

**skip:** sirve para emitir x cantidad de emisiones iniciales

**distinct:** deja pasar valores que no hayan sido emitidos previamente en mi observable

> interval$ --- 1 --- 1 --- 2 --- 3 --- 3 --- 1 --- 4 --- | ---

> distinct()

> -------- --- 1 --- _ --- 2 --- 3 --- _ --- _ --- 4 --- | ---

**distinctUntilChanged:** es muy parecido al operador **distinct**, la diferencia es que emite valores siempre y cuando la emisión anterior no sea la misma


> interval$ --- 1 --- 1 --- 2 --- 3 --- 3 --- 1 --- 4 --- | ---

> distinctUntilChanged()

> -------- --- 1 --- _ --- 2 --- 3 --- _ --- 1 --- 4 --- | ---

**distinctUntilKeyChanged:** 


# Sección 7: Operadores que trabajan con el tiempo

**debounceTime:** nos ayuda a que nosotros podamos contar cuantas milésimas de segundo han pasado desde la última emisión y si esa milésima de segundo sobrepasa el parámetro que tenemos en los paréntesis entonces emitirá dicho valor.

el *debounceTime* nos ayuda a restringir la cantidad de emisiones que nuestro observable inicial esta emitiendo.

En este ejemplo cuando el observabe inicial ingresa **a**, espera 1 segundo y emite **a**, pero entre **b** y **c** se ejecuta antes del minuto, por ese motivo solo se emite **c** 

> source$ --- a --- b - c

> debounceTime(1000)

> -------- ------ +1s -- a --- +1s --c



**throttleTime:** es lo opuesto al operador debounceTime, pero un poco diferente
el **debounceTime** cuando el source$ emite un valor espera un segundo para emitir, throttleTime cuando el source$ emite el primer valor inmediatamente emite dicho valor solo que espera 1 seg hasta emitir otro valor, en el caso que se haya emitido mas de un valor en el segundo de emisión, ignorará cualquire valor tomando en cuenta solo el primer valor

El **throttleTime:** y **debounceTime**  son operadores bastante útiles para controlar las emisiones de observables que emiten valores muy frecuentemente 
**sampleTime:** nos permite obtener el ultimo valor emitido en un intervalo de tiempo
el sampleTime nos permite a nosotros tener una suscripción que esta pendiente de cada una de sus emisiones en periodo de tiempo

>-a b c ---- b ------------------ctx

> sampleTime(1000)

>---*1s*--c--*1s*--b--*1s*--_-----*1s*--x--
**sample:**   emite el ultimo valor emitido por el observable, hasta que el otro observable que esta dentro de *samle* emita un valor

**auditTime:** son muchos los operadores que manejan el tiempo  y trabajan de maneras muy similares, el aditTime emite el ultimo valor que ha sido emitido por el observable en un periodo de tiempo determinado\

LOS OBERVADORES DE TIEMPO AYUDAN A CONTROLAR LA EMISION DE SPAM,  QUE NOSOTROS QUEREMOS PROCESAR EN UN PERIODO DE TIEMPO 

Vinos en la sección anterior (ajax), que existe la necesidad de subscribirse al producto de un observable, para poder obtener la información que necesitamos, lo cual lleva a que perdamos control de la legibilidad de nuestro código y la facilidad de trabajar con observables y operadores...

Por suerte, el equipo de ReactiveX pensó en esto y nos ayuda con las siguientes funciones y operadores:

**mergeAll** sirve para trabajar con observables que internamente retornan observables.
si el primer observable se completa(abcd) y también se completa la rama padre source$, no se completa el observable en general, es decir no se dispararía el complete después del mergeAll porque aún hay una suscripción que esta emitiendo valores, si después la última suscripción emite un valor de **g**, la salida seria **g**.

Este proceso de unificar observables en una sola salida se conoce como flattening Operator (Operador de aplanamiento)

source$----------------------------|-------
obs1------obs2
\___________\
_\____________\
__a_____________\
___b______________e
____\______________f
_____\_______________\
______c________________\
_______d_________________g
________fin

>  **MergeAll**

>-a--b---c---e--d--f------g




**mergeMap** va a recibir el valor que sea emitido de nuestro observador inicial y está regresando un nuevo observador un intervalo de milisegundos.
Cuando un operador de aplanamiento ve que se regresa un observable realmente no va a transferir el objeto al subscribe o al siguiente operador, lo que emite cuando fluyen atreves de él es el valor producto de la subscripción interna.
El mergeMap no tiene límite de suscripciones internas y todas pueden estar activas simultáneamente 

**switchMap** es muy parecido al MergeMap, que recibe un callback que retorna un observable es el que se va a subscribir para hacer la emisión en la salida
A diferencia del mergeMap(mantiene todas las líneas del tiempo que está subcrito), el switchMap solo conserva un observable interno activo y subscrito. 
**concatMap** Sirve para concatenar los observables resultantes que pueden fluir atravez de ese operador

**exhaustMap** similar al switch ya que solo mantiene activo un observable, pero la diferencia es que si más de un observable entra a la vez, el exhaustMap ignora el resto y solo toma el primero en llegar.

es útil cuando tenemos eventos que están lanzando spam muy rápidamente, por ejemplo cuando tenemos un botón, y el usuario realiza varias veces click.

Aquí tendremos formas muy interesantes de poder trabajar con el concepto del aplanamiento, que veremos y explicaré más adelante en esta sección

# sección 10 

operadores y métodos para combinar las emisiones de los observables o bien varios observables entre sí.

**startWith** realiza una emisión antes que el observable realiza una petición asyn 

**endWith** antes que termine el obs realiza la emisión del ultimo valor, no importa el orden entre startWith

**concat ** NO ES UN OPERADOR, es una F U N C I O N que recibe observables y crea un nuevo observable

**merge** NO ES UN OPERADOR, es una F U N C I O N que recibe un o mas observables y el resultado va ser el producto de los dos observables combinados simultáneamente, además no se realiza el complete del subscribe hasta que todos los observables terminen

**combineLatest** es una función que recibe observables como argumentos, combinarnos y emitir el valor de todos los observables internos simultáneamente, en otras palabras espera hasta que todos los observables que entren a la función emitan un valor para retornar otro observable

combina el último

**forkJoin** es una función que recibe varios observables para trabajar

