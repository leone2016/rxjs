import { of, range, asyncScheduler } from 'rxjs';
// crea una secuencia de numeros dentro de un rango especifico 
//range(-5,5 solo imprime cinco valores del -5 al 0 
const scr$ = range(-5,5, asyncScheduler);

console.log('inicio');
scr$.subscribe( console.log);
console.log('fin');