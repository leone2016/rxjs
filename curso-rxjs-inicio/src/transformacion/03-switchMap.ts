import { fromEvent } from 'rxjs';
import {debounceTime, map, mergeAll, mergeMap, pluck, switchMap} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

//referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

//streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');
const url = 'https://httpbin.org/delay/1?arg=';
input$
    .pipe(
        pluck('target', 'value'),
        switchMap( text => ajax.getJSON(url + text))
    )
    .subscribe(console.log)
