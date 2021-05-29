import {Observable} from "rxjs";


const obs$ = new Observable<string>( subscriber => {
    subscriber.next('hola')
    subscriber.next('mundo')

    subscriber.complete()
    subscriber.next("mundo")
    subscriber.next("mundo")
})


obs$.subscribe(console.log)
