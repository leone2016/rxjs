
import { range, of, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface personajeModel { tipo: string; nombre: string; }
/*range(1,10).pipe(
    filter((val)=> val%2 === 1)
    ).subscribe(console.log);
*/
/*range(1,10).pipe(
    filter((val, i)=>{
        console.log('index',i);
        return val%2 === 1;
    } )
).subscribe(console.log);
*/

/**
 * Ejercicio: imprimir solo los heroes de un array de obj, sin utiizar for o if
 */
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

from(personajes).pipe(
    filter(personaje => personaje.tipo === 'heroe')
)
.subscribe(console.log);

/**
 * Utilizar operador map y filter
 * disparar el evento solo al presionar enter 
 */

 const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup').pipe(
     map( event => event.code),
     filter( key => key === 'Enter')
 )
 keyup$.subscribe(console.log);
