import {from, of} from "rxjs";

const observer = {
    next : val => console.log('NEXT ', val),
    complete : () => console.log(' ... completed ...'),
}

const source$ = from([1,2,3,4,5,6])
const source2$ = of(...[0,2,3,4,5,6])
const source3$ = from('Leonardo')


source$.subscribe(observer)
source2$.subscribe(observer)
source3$.subscribe(observer)


/**
 * consultas con fetch y from
 */
const source4$ = from( fetch('https://api.github.com/users/klerith  '))
source4$.subscribe( async (resp)=>{
    console.log(resp)

    const dataResp = await resp.json();
    console.log(dataResp)
})

/**
 * Funciones generadoras o iterables de javascript
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Generator
 */

const miGenerador = function *(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 9;
}

const miIterable = miGenerador();

from(miGenerador()).subscribe(observer)
