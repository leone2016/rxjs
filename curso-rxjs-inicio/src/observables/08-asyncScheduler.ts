import { asyncScheduler } from 'rxjs';

setInterval( ()=>{ }, 3000);
setTimeout( ()=>{}, 3000 );

const saludar = () => console.log("hola mundo");
//const saludar2 = (nombre) => console.log(`hola  ${nombre.a} ${nombre.b}` );

//asyncScheduler.schedule( saludar, 2000 );
//asyncScheduler.schedule( saludar2, 2000, {a: 'leonardo', b: 'Medina'} );

//no se puede utilizar una funcion d flacha o lambda function para generar un intervalo
asyncScheduler.schedule(  function( state ){ 
    console.log('state', state);

    this.schedule( state+ 1, 1000);
}, 3000, 0)
