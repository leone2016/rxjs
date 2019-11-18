import { Observable, Subscriber, Observer } from 'rxjs';

const observer: Observer<any> = { 
    next: value => console.log( '[next]:', value ),
    error: error=> console.warn ('[erro]', error), 
    complete: ()=> console.info('Completado') 
}

const intervalo$ = new Observable<any>( subs=> { 
    const intervalID = setInterval( ()=>{ 
        subs.next(Math.random())
    }, 1000)

    return ()=> clearInterval(intervalID);
})

const subs1 = intervalo$.subscribe( console.log );