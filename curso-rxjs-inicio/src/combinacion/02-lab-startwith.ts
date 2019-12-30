import {ajax} from "rxjs/ajax";
import {startWith} from "rxjs/operators";


const loagingDiv = document.createElement('div');
loagingDiv.classList.add('loading');
loagingDiv.innerHTML= 'Cargando...';


const body = document.querySelector('body');

//stream

ajax.getJSON('https://reqres.in/api/users/2?delay=3')
    .pipe(
        startWith(true )
    ).subscribe(res =>{
        if( res === true ){
            body.append( loagingDiv )
        }else{
            document.querySelector('.loading').remove()
        }
    }
)
