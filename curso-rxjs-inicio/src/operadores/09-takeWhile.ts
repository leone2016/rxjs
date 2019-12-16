
import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>( document, 'click');


click$.pipe(    
    map( ( {x,y} ) => ( {x,y} ) ),
    takeWhile( ({ y }) => y<=150, true) // cuando la condicion sea mayor a 150 no imprime, pero en el caso que se desee imprimir el valor que rompe la condición se utiliza INCLISIVE que es el ultimo valor
).subscribe({
    next:  val=> console.log( 'next', val),
    complete: ()=> console.log( 'Complete' )
})