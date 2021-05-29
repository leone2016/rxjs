import {Observable, Observer, Subject} from "rxjs";

/**
 * caso 1: Casteo múltiple: muchas subscripciones va a estar subject (observable), y va a servir para distribuir la misma información a todos los lugares que estén subscritos (todos los lugares que les interese ese valor)
 * caso 2: También es un **observer**:  en clases 14 se envio un observer como parámetro a una subscripción `obs$.subscribe(observer)`, podemos enviar un subject como argumento al _subscriber_
 * Puede manejar el `NEXT, ERROR, COMPLETE`
 */
const observer: Observer<any> = {
    next: value =>  console.log( '[NEXT]', value),
    error: err =>  console.warn( '[ERROR]', err),
    complete: () =>  console.info( '[ COMPLETADO ]'),
}


const intervalo$ = new Observable<number>( subscriber => {

    const intervalOID = setInterval( ()=>{
        subscriber.next( Math.random())
    }, 1000)

    return ()=> {
        clearInterval(intervalOID)
        console.log(" ** intervalo destruido **")
    }
})



const subject$ = new Subject();
// CASO 2
const caso2Subscription = intervalo$.subscribe(subject$)
// CASO 1
const subs2 = subject$.subscribe(observer)
const subs3 = subject$.subscribe(observer)

// cuando la data es producida por el observable en si mismo, el considerado un "COLD observable".
// pero cuando la data es producida fuera del observable es llamado un "hot observable"

setTimeout(()=>{
    subject$.next(10);
    subject$.complete();
    caso2Subscription.unsubscribe()
},3500)
