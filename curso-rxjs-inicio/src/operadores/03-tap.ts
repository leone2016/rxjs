import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numeros$ = range(1,5);

numeros$.pipe(
    tap(x=>{
        console.log('init tap', x);
        return 100; // tap no modifica la data
    }),
    map(x=> x*10),
    tap({
        next: x=> console.log('fin tap', x),
        complete: ()=> console.log("T E R M I N A   T O D O")
    })
)
.subscribe(x => console.log('sub: ',x));
