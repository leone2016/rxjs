
//crear form

import {from, fromEvent, of} from "rxjs";
import {catchError, exhaustMap, map, mergeMap, pluck, switchMap, tap} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');
//helper
const peticionHttpLogin = (userPass)=>{
    return ajax.post('https://reqres.in/api/login?delay=1', userPass)
        .pipe(
            pluck('response', 'token'),
            catchError( err => of( 'xxx'))
        )
}
//const peticionHttpLogin = (userPass)=>  ajax.post('https://reqres.in/api/login?delay=1')

//config
//utilizar esta url, es para realizar peticiones
// reqre.ini
inputEmail.type = 'email';
inputEmail.placeholder = 'email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append( inputEmail, inputPass, submitBtn );
document.querySelector('body').append(form);

//prevenir el refresh del boton
//streams - observables\
const submitForm$ = fromEvent( form, 'submit');

submitForm$
    .pipe(
        tap(ev => ev.preventDefault()), //lanza un evento secundario
        map(ev => (
                {
                    email:ev.target[0].value,
                    password:ev.target[0].value,
                }
            )
        ),
        //mergeMap(peticionHttpLogin)
        //switchMap(peticionHttpLogin)
        exhaustMap(peticionHttpLogin)

    )
    .subscribe( token =>{
            console.log(token);

        }
    )


