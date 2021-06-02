import {fromEvent} from "rxjs";
import {map, mapTo} from "rxjs/operators";


const key$ = fromEvent<KeyboardEvent>(document, 'keyup')
const keyCode$= key$.pipe(map( value => value.code))
const keyMapTo$= key$.pipe(mapTo<KeyboardEvent, string>( 'retorna cualquier cosa'))


keyCode$.subscribe(console.log)
keyMapTo$.subscribe(console.log)
