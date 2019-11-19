import { of } from 'rxjs';

// of: cuando tengamos una secuencia de valores que siempre van a ser boleanos o siempre van a ser strings,
// es recomendable agregar el tipo de dato of<string> o of<number>, con el objetivo de tener un tipado estrigto de datos
//const obs$ = of ([1,2], { a:1, b:2 }, function(){}, Promise.resolve(true))
const obs$ = of ([1,2,3,4,5,6],7,8,9,10)

console.log( 'inicio de los Observables');
obs$.subscribe( 
    next => console.log('next', next),
    null,
    ()=> console.log('Terminamos la secuencia')
);

console.log('fin de los Obs');