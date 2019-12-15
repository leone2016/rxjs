import { interval, timer } from "rxjs";

const observer = {
    next: val => console.log('next',val),
    complete: ()=> console.log('complete')
}

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

console.log('inicio');
//const interval$ = interval(1000);
//interval$.subscribe( observer );

//const timer$ = timer(2000, 1000); //trbaja igual que el interval, empieza en 2s y se ejecuta cada 1s
const timer$ = timer( hoyEn5 )
timer$.subscribe( observer );

console.log('fin');
