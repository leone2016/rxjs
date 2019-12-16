import { interval, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

//creamos un boton para el seg observable

const boton = document.createElement('button');
boton.innerHTML = 'Detener Timer';

document.querySelector('body').append(boton);

const counter$ = interval(1000); //primer observable

const clickBoton$  = fromEvent( boton, 'click'); //segundo observable

counter$.pipe(
    takeUntil(clickBoton$)
)
.subscribe({
    next: val=> console.log('next', val),
    complete: ()=> console.log('complete')

})

