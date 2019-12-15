
import { from } from "rxjs";
import { reduce, scan, map } from 'rxjs/operators';

const numeros = [1,2,3,4,5];

const totalAcum = (acc, cur)=> acc+cur;
//R E D U C E
console.log("R E D U C E")
from(numeros).pipe(
    reduce(totalAcum,0)
)
.subscribe(console.log);
//S C A N
console.log("S C A N")
from(numeros).pipe(
    scan(totalAcum,0)
)
.subscribe(console.log);


/**
 * R E D U X
 */
interface Usuario{
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;
}

const user: Usuario[] = [
    {id: 'leo', autenticado: false, token: null},
    {id: 'leo', autenticado: true, token: 'ABC'},
    {id: 'leo', autenticado: true, token: 'ABC1234'},

]

const state$ = from( user ).pipe(
    scan<Usuario>( (acc, cur)=>{
        return {... acc, ...cur} //destructuracion, para romper la referencia 

    }, { edad: 33 })
)

const id$ = state$.pipe(
    map(state => state.id)
)


id$.subscribe(console.log);