import {interval} from "rxjs";
import {reduce, take, tap} from "rxjs/operators";


const numbers = [1,2,3,4,5,6];

const reducer = ( valorAcumulador: number, valorActual: number) =>{
    return valorAcumulador + valorActual;
}

const totalReducer = numbers.reduce(reducer)

console.log(totalReducer)

interval(500).pipe(
    take(3), // toma los 3 primeros valores
    tap(console.log),
    reduce(reducer, 5)
)
    .subscribe({
        next: val=> console.log('next:' +val),
        complete: ()=> console.log('C O M P L E T E')
    })


