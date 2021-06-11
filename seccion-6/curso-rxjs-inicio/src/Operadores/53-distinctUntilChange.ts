import {from, of} from "rxjs";
import {distinct, distinctUntilChanged} from "rxjs/operators";


const numeros$ = of<number| string>(1,1,1,3,3,2,2,4,4,5,3,1)

numeros$.pipe(
    distinctUntilChanged()
).subscribe(console.log)

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
    distinctUntilChanged( (ant, act)=> ant.nombre === act.nombre)
).subscribe(console.log)


/**
 * ejercicio documentacion
 */
interface Person {
    age: number,
    name: string
}
of<Person>(
    { age: 4, name: 'Foo'},
    { age: 7, name: 'Bar'},
    { age: 5, name: 'Foo'},
    { age: 6, name: 'Foo'},
).pipe(
    distinctUntilChanged((p: Person, q: Person) => p.name === q.name),
)
    .subscribe(x => console.log(x));
