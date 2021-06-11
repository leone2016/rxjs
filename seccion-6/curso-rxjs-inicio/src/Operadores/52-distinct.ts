import {from, of} from "rxjs";
import {distinct} from "rxjs/operators";


const numeros$ = of<number| string>(1,'1',1,3,3,2,2,4,4,5,3,1)

numeros$.pipe(
    distinct()
).subscribe(console.log)

const personajes = [
    {
        nombre: 'ironman'
    },
    {
        nombre: 'hulk'
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
        nombre: 'ironman'
    },
]

from(personajes).pipe(
    distinct(x=> x.nombre)
).subscribe(console.log)
