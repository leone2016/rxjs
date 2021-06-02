import {from, Observable, observable, range} from "rxjs";
import {filter} from "rxjs/operators";

/**
 * ej: si el número que ingresa es un impar lo deja pasar
 */
// range(1,10).pipe(
//     filter((val)=> val%2 === 1)
//     ).subscribe(console.log);

/**
 * ej: inicia en 20 y cuenta 30 valores mas, va del 20 al 50, de aqui solo imprime valores impares
 */
range(20,30).pipe(
    filter((val, i)=>{
        // console.log('index',i);
        return val%2 === 1;
    } )
).subscribe(console.log);

/**
 *  PERSONAJES, imprimir solo los que son heroes
 */
interface personajeModel { tipo: string; nombre: string; }
const personajes:personajeModel[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    },

]

from<personajeModel[]>(personajes).pipe(
    filter<personajeModel>( x=> x.tipo === 'heroe')
).subscribe(console.log)
