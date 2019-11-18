
import { Observable, Subscriber, Observer } from 'rxjs';

const observer: Observer<any> = { 
    next: value => console.log( '[next]:', value ),
    error: error=> console.warn ('[erro]', error), 
    complete: ()=> console.info('Completado') 
}


const intervalo$ =new Observable<number>( subs =>{ 
    //creando contador
    let i =0;
    const interval = setInterval( ()=>{ 
        subs.next(i);
        i++;
        console.log(i)
    }, 1000 );


    return (() =>{ 
        clearInterval(interval);
        console.log('intervalo destruido');
    })
});

const subs = intervalo$.subscribe(observer);
const subs2 = intervalo$.subscribe(observer);
const subs3 = intervalo$.subscribe(observer);

//encadenar subscripciones a la subscripcion origina; 
subs
.add(subs2)
.add(subs3);

setTimeout( ()=>{ 
    subs.unsubscribe();
    //console.log('Completado');
}, 3000);
