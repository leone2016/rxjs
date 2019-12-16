import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, pluck} from "rxjs/operators";

const click$ = fromEvent( document, 'click');

click$.pipe(
    debounceTime(3000)
).subscribe( console.log);

/**
 * Ejemplo 2
 */
const input = document.createElement('input');
document.querySelector('body').append(input);

//observable que esta pendiente del input

const input$ = fromEvent( input, 'keyup');

input$.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged() // ej: suponiendo que el usuario escribe pepsi y en menos de 1seg borra y vuelve a escribir pepsi, se generan dos peticiones
).subscribe( console.log )
