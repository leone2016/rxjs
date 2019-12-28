import { fromEvent } from 'rxjs';

//referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append(textInput, orderList);

//streams

const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');