import {of} from "rxjs";


const obs$ = of<number>(...[1,2,3,4,5,6],7,8,9,10)


console.log( 'inicio de los Observables');
obs$.subscribe(
    next => console.log('next', next),
    null,
    ()=> console.log('Terminamos la secuencia')
);

console.log('fin de los Obs');
