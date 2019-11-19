import { of, fromEvent } from 'rxjs';
//fromEvent: nos permite crear observables de even target es decir de cierto tipo
// en este ejemplo el event target es el DOCUMENT donde se busca todos los eventos del SCROLL

/**
 * Eventos del Dom
 */

 const scroll1$ = fromEvent<MouseEvent>(document, 'click'); 
 const scroll2$ = fromEvent<KeyboardEvent>(document, 'keyup');

 const observer = { 
     next: val => console.log('next',val)
 }

 // es necesario subscribirse para imprimir los datos
 scroll1$.subscribe(observer);
 scroll2$.subscribe(event =>{ console.log(event.key)} );
