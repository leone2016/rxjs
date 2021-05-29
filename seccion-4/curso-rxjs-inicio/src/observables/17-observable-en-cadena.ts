import {Observable, Observer} from "rxjs";

const observer: Observer<any> = {
    next: value =>  console.log( '[NEXT]', value),
    error: err =>  console.warn( '[ERROR]', err),
    complete: () =>  console.info( '[ COMPLETADO ]'),
}

const intervalo$ = new Observable<number>( subscriber => {

    let i = 0;

    const interval = setInterval(()=>{
        subscriber.next(i)
        i++
        console.log(i)
    }, 1000)

    return ()=>{
        clearInterval(interval)
        console.log(" [ interval ] destruido")
    }
})


const subs = intervalo$.subscribe(observer)
const subs2 = intervalo$.subscribe(observer)
const subs3 = intervalo$.subscribe(observer)

subs.add(subs2).add(subs3)
setTimeout(()=>{
    subs.unsubscribe()
    // subs2.unsubscribe()
    //subs3.unsubscribe()
}, 3000)
