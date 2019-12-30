import { fromEvent } from 'rxjs';
import {debounceTime, map, mergeAll, mergeMap, pluck} from "rxjs/operators";
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
/**
 * PROBLEMA con mergeMAP
 * si se emite muchos valores en el input a pesar que solo me interesa el último,
 * el api de github tiene varias restricciones y no se puede hacer peticiones tan rapidas y github puede bloquear
 * mi direccion ip por unos momentos
 */
/*input$.pipe(
    debounceTime<KeyboardEvent>(500), //espera que el usuario deje de escribir 500ms
    // luego de esperar 500ms, se transforma ese evento
    pluck('target', 'value'), //resume esto const text = event.target['value'];
    mergeMap( text => {  // se crea un nueva peticion - observable
        // se puede quitar las {} y eliminar la palabra return
        return ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
    }),
    pluck('items')//{incomplete_results: ..., items:..., total_count:...}
).subscribe( res=>{
    console.log(res);
} )
*/

/**
 * hay que tener cuidado con el uso del mergeMap, ya que este se subscribe a n cantidad de observables que este reciba,
 * para evitar posibles peticiones basura, es recomendable usar el switch map
 */
const url = 'https://httpbin.org/delay/1?arg=';
input$
    .pipe(
        pluck('target', 'value'),
        mergeMap( text => ajax.getJSON(url + text))
    )
    .subscribe(console.log)
