import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip } from 'rxjs/operators';

//creamos un boton para el seg observable

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000); //primer observable

//const clickBoton$  = fromEvent( boton, 'click'); //segundo observable

const clickBoton$  = fromEvent( boton, 'click').pipe(
    skip(1) //detiene el interval despues del segundo click
);

counter$.pipe(
    takeUntil(clickBoton$)
)
.subscribe({
    next: val=> console.log('next', val),
    complete: ()=> console.log('complete')

})

