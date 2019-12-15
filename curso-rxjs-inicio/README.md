# Proyecto inicial - Curso de RXJS

** Lo primero que debemos hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


** Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto con el siguiente comando

```
npm start
```
Para que funcione, recuerden que se debe ejecutar este comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)


Los temas principales de la sección son:

**of:** cuando tengamos una secuencia de valores que siempre van a ser boleanos o siempre van a ser strings,
 es recomendable agregar el tipo de dato of<string> o of<number>, con el objetivo de tener un tipado estrigto de datos
 const obs$ = of ([1,2], { a:1, b:2 }, function(){}, Promise.resolve(true))

 **from:** crea un observable en base a un array, objeto, promesa, iterable, otro observable

**fromEvent:** nos permite crear observables de even target es decir de cierto tipo
en este ejemplo el event target es el DOCUMENT donde se busca todos los eventos del SCROLL

**range:** la cual nos crea un obs que crea una sequencia de num en base a un rango, por defecto con sincronos pero se puede transformar en asyncronos con la funcion **async scheduler**, si tenemos un range de 1 - 5 el valor inicial será 1 y el último será va ser el 5 y se completaría
interval, el segundo parametro del range indica el N número consecticos 
eg: 
````js
range( 1,5 )
 outPut
 1
 2
 3
 4
 5

 range(-5,5)
 -5
 -4
 -3
 -2
 -1
````

 

**interval y timer:** estas dos funciones trabajan con intevalos de tiempo

>interval: genera una secuencia de números de 0 hasta infinito, por naturaleza con asincronos
>timer: genera un observable que empieza ha emitir valores despues de una fecha específica despues de ese valor empieza a generar los valores siguientes en un periodo de tiempo indicado 



 **asyncScheduler:** no crea un observable crea una subscrpcion, (una subscripción es el producto de un .subcribe()  )transforma de sincrona a asincrona



>Los temas principales de esta sección son:

Explicación de los operadores

Operadores como:

**map:** es el más común, permite trasformar lo que recibimos o lo que emite el observable en algo que
nostros ocupemos, puede servir para extraer inf o para trasformarla o retornar otra cosa totalmente diferente

**pluck** es útil cuando necesitamos extraer un valor del objeto que estamos recibiendo y que esa sea la nueva salida del observable

**mapTo:** 
cuando el observable emite el valor **1** y entra al **mapTo** la salida sería **a**, sirve para mostrar una salida específica 

**filter:** sirve para filtrar la emsión de los valores del observable

**tap:** El principal uso del tap es disparar efectos secundarios como por ejemplo imprimir en consola para conocer el valor que tenemos ó bien cuando se necesite disparar una acción cuando la información pasa por ese observable o cuando sea emitido un nuevo valor en el cual está presente mi tap, **NO CAMBIA EL FLUJO DE INFORMACIÓN**

**reduce:** aplica una función acumuladora a las emisiones producidas por el observable 

ej:

en este ejemplo se emite 1,3,5 pero no emite nada el reduce **acc** es el valor acumulado el **curr** es el valor actual (current value), dentro del *reduce* dice que va retornar el valor acumulado más el valor actual, el **cero** indica el valor inicial.
Cuando el observable se completa entonces ahi es cuando vamos a tener el total acumulado    

> input$ ----- 1 ---- 3 ---- 5 -----|--->

> reduce(( acc, curr ) => acc + curr, 0)

> -------------------------------------9--->

**scan**

**Encadenamiento de operadores**