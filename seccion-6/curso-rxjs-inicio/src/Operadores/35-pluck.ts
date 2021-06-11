import {fromEvent, range} from "rxjs";
import {map, pluck, tap} from "rxjs/operators";


const key$ = fromEvent<KeyboardEvent>(document, 'keyup')
const keyCode$= key$.pipe(map( value => value.code))
const keyPluck$= key$.pipe(pluck( 'target', 'baseURI'))


keyCode$.subscribe(console.log)
keyPluck$.subscribe(console.log)
