import { fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>( document, 'click');
console.info('DA CLICK en la pantalla')
//MIRAR LA FIRMA de first
click$.pipe(
    tap(console.log),
    map( ({ clientX, clientY}) =>({clientX, clientY})), // se puede comentar esto
    first(event => event.clientY >= 150 ) //similar a take(1)
).subscribe({
    next:val=> console.log('next', val),
    complete: ()=>console.log('complete')
});
