import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';


const totalReducer = (acc: number, curr: number)=>{ //acumulador, valorActual
    return acc + curr;
}

interval(500).pipe(
    take(3),
    tap(console.log),
    reduce(totalReducer)
    )
    .subscribe({
        next: val=> console.log('next:'+val),
        complete: ()=> console.log('C O M P L E T E')
    })

