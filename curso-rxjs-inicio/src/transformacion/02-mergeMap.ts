import {fromEvent, interval, of} from "rxjs";
import {map, mergeMap, take, takeUntil} from "rxjs/operators";

/**
 * ejercicio 1 imprime las letras del obs 1 y concatena con el obs interval
 */
const letras$ = of('a', 'b', 'c');

letras$
    .pipe(
        mergeMap((letra)=> interval(1000)
            .pipe(
                map( i=> letra +i),
                take(3)
            )
        )

    )
    .subscribe({
        next: val => console.log('next', val),
        complete: ()=> console.log('c o m p l e t e')
    });
/**
 * ejercicio 2: contar cuanto tiempo para el usuario presionando el mouse
 * 1. escuchar cuando el usuario da click mouseDown
 * 2. cuando da click se ejecuta el interval
 * 3. el interval se detiene hasta que el usuario levanta el click mouseUp
 */

const mouseDown$ = fromEvent( document, 'mousedown');
const mouseUp$ = fromEvent( document, 'mouseup');
const interval$ = interval(); // cuando esta vacio es igual a poner 1


mouseDown$
    .pipe(
        mergeMap( ()=> interval$
            .pipe(
                takeUntil(mouseUp$)
            )
        )
    )
    .subscribe( console.log);
