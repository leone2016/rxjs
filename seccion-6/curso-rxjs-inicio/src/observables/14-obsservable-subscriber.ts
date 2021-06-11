import {Observable, Observer} from "rxjs";

const observer: Observer<any> = {
    next: value =>  console.log( '[NEXT]', value),
    error: err =>  console.warn( '[ERROR]', err),
    complete: () =>  console.info( '[ COMPLETADO ]'),
}
const obs$ = new Observable<string>( subscriber => {
    subscriber.next('hola')
    subscriber.next('mundo')

    //forzar un error
    const a = undefined;
    a.nombre = 'Leo'
    subscriber.complete()
    subscriber.next("mundo")
    subscriber.next("mundo")
})


obs$.subscribe(observer)


/*
obs$.subscribe(
    valor=> console.log('next', valor),
    error => console.warn( 'error', error ),
    ()=> console.info('complete')
);*/
