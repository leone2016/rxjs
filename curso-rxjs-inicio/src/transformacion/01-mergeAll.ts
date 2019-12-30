import { fromEvent } from 'rxjs';
import {debounceTime, map, mergeAll, pluck} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

//referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

//streams

// ES IMPORTANTE TIPAR LO QUE ENTRA Y LO QUE SALE, no es importante tipar lo que esta adentro
// en este caso se tipo <KeyboardEvent>
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500), //espera que el usuario deje de escribir 500ms
    // luego de esperar 500ms, se transforma ese evento
    pluck('target', 'value'), //resume esto const text = event.target['value'];
    map( text => {  // se crea un nueva peticion - observable
        // se puede quitar las {} y eliminar la palabra return
        return ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
    }),
    mergeAll(), //mergeAll se subscribe a la peticion anterior
    pluck('items')//{incomplete_results: ..., items:..., total_count:...}
).subscribe( res=>{
    console.log(res);
} )
