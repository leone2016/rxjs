import { interval, fromEvent } from 'rxjs';
import { sample } from 'rxjs/operators';


const interval$ = interval(500);

const click$ = fromEvent( document, 'click');

interval$.pipe(
    sample( click$ ) //este solo se ejecuta cuando se de click en el DOM
    // en este caso para que se ejecute el console log tiene que darse click, y desde ahi se muestra ek ultimo valor del interval$
).subscribe( console.log);