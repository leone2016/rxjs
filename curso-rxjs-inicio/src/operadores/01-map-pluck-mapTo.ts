import { range, fromEvent } from 'rxjs';
import { map, pluck, mapTo } from 'rxjs/operators';



range(1,5)
.pipe(map(val => val*10))
.subscribe( console.log);

console.info('TOCA UNA TECLA')
const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup')
const keyupCode$ = keyup$.pipe(map( event=>event.code ))
const keyupPlunk$ = keyup$.pipe( pluck('target', 'baseURI')) //similar a utilizar target.baseURI pero sin map
const keyupMapTo$ = keyup$.pipe( mapTo('Tecla presionada')); //similar a utilizar target.baseURI pero sin map


keyup$.subscribe( val=> console.log('frontEvent',val.code));
keyupCode$.subscribe( val=> console.log('map',val));
keyupPlunk$.subscribe( val=> console.log('pluker', val));
keyupMapTo$.subscribe( val=> console.log('MapTo', val));

