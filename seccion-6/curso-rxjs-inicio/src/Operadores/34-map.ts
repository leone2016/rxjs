import {fromEvent, range} from "rxjs";
import {map, tap} from "rxjs/operators";


range(1,5).pipe(
    tap(console.log),
    map<number, string>(val => (val * 10).toString())
).subscribe(console.log)


const key$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(
        map( value => value.code)
    )


key$.subscribe(console.log)
