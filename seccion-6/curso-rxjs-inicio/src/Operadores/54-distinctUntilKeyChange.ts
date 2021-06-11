import {from, of} from "rxjs";
import { distinctUntilKeyChanged} from "rxjs/operators";

/*
Ejercion objetos
 */
const personajes = [
    {
        nombre: 'ironman'
    },
    {
        nombre: 'ironman'
    },
    {
        nombre: 'capitan'
    },
    {
        nombre: 'ironman'
    },
    {
        nombre: 'black_widow'
    },
    {
        nombre: 'antman'
    },
    {
        nombre: 'capitan'
    },
    {
        nombre: 'hulk'
    },
    {
        nombre: 'hulk'
    },
]

from(personajes).pipe(
    distinctUntilKeyChanged( 'nombre')
).subscribe(console.log)

