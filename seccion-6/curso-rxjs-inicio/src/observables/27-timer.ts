import {interval, timer} from "rxjs";


const observer = {
    next: val => console.log('next',val),
    complete: ()=> console.log('complete')
}
/**
 * TIMER:
 */

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);

console.log('TIMER');
console.log('++++++++++++++++++++++++++++++++++  I N I C I O ++++++++++++++++++++++++++++++++++');
//const timer$ = timer(2000, 1000); //trabaja igual que el interval, empieza en 2s y se ejecuta cada 1s

const timer$ = timer(hoyEn5);
timer$.subscribe( observer );
console.log('++++++++++++++++++++++++++++++++++++  F I N ++++++++++++++++++++++++++++++++++++++');

