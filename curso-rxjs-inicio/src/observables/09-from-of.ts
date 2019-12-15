
import { from, of } from 'rxjs';

const observer = {
    next: val => console.log('next:', val), 
    complete: ()=> console.log('complete')
}

const source$ = from([1,2,3,4,5])
const source2$ = of(...[1,2,3,4,5])

const source3$ = from('Leonardo')

const source4$ = from( fetch('https://api.github.com/users/klerith  '))



source$.subscribe( observer )
source2$.subscribe( observer )
source3$.subscribe( observer )


