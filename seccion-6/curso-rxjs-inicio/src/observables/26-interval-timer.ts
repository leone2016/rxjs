import {interval, timer} from "rxjs";


const observer = {
    next: val => console.log('next',val),
    complete: ()=> console.log('complete')
}

/**
 * INTERVAL, son asynchronous por naturaleza
 */
console.log('INTERVALO');
console.log('++++++++++++++++++++++++++++++++++  I N I C I O ++++++++++++++++++++++++++++++++++');
const interval$ = interval(1000);
interval$.subscribe( observer );
console.log('++++++++++++++++++++++++++++++++++++  F I N ++++++++++++++++++++++++++++++++++++++');

/**
 * TIMER:
 */
console.log('TIMER');
const timer$ = timer( 200 )
timer$.subscribe( observer );
