import {range} from "rxjs";
import {map, tap} from "rxjs/operators";

const numero$ = range( 1,5)

numero$.pipe(
    tap( x => {

        console.log(" antes ",x)
        return 100 // tap no modifica la data
    }),
    map(value => value * 10),
    tap({
        next: x =>  console.log( ' next tap: ', x),
        complete: ()=> console.log( 'TERMINA todo . . .')
    })
).subscribe(console.log)
