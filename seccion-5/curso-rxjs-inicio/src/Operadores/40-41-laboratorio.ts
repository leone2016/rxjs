/**
 * LABORATORIO, crear mediante observables un progressbar en un html que vaya cargando cuando el usuario aga scroll haca abajo
 */
import {fromEvent} from "rxjs";
import {map} from "rxjs/operators";

const texto = document.createElement('div')
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis cursus massa at posuere. Duis et urna sed nisl fringilla sollicitudin vitae a dolor. Morbi iaculis volutpat odio et elementum. Nam ac elit vel tellus tempor hendrerit et ut justo. Integer quam massa, blandit id aliquet sit amet, elementum a tellus. Sed tempus quam vel dictum lacinia. Vestibulum cursus, velit ut hendrerit dictum, sem lacus mattis lorem, at euismod neque metus eu tellus. Vivamus vestibulum lorem id velit aliquam sodales. Vivamus ultrices a purus vel molestie.
<br/><br/>

Proin pulvinar dapibus velit. Morbi molestie tellus eget erat pellentesque, id tempus nunc sollicitudin. Donec quis velit vitae lorem ultrices vestibulum ut non ex. Curabitur nibh dolor, vulputate eget mattis nec, mattis quis felis. Donec rutrum, tortor vel sodales finibus, nulla ante pellentesque sem, a blandit augue sapien id arcu. Etiam non risus quis nisl convallis imperdiet. Curabitur mollis eleifend massa, at egestas lectus scelerisque in. Fusce nunc nisl, sodales volutpat erat vitae, tempus blandit ipsum. Sed scelerisque mauris at viverra ornare.
<br/><br/>

Maecenas maximus enim ut quam dictum blandit. Nulla facilisi. Nam porttitor sed lacus et convallis. Ut iaculis orci id gravida sagittis. Mauris quis pellentesque purus. Sed ligula leo, tempus quis eros a, ultrices gravida dolor. Nam sed scelerisque quam. Phasellus laoreet quis ex id dictum. Suspendisse non est mattis, blandit arcu at, faucibus massa. Quisque ut fringilla neque. Suspendisse potenti. Vivamus lobortis commodo pretium. Quisque lacinia, arcu quis vehicula ullamcorper, sem nisl facilisis tortor, sit amet dictum nisi ipsum ullamcorper justo.
<br/><br/>

Vivamus vitae tortor feugiat, ultricies odio a, rutrum nisl. Donec vel congue purus. Pellentesque ultricies orci molestie velit pellentesque, nec tincidunt sem scelerisque. Cras aliquet convallis vulputate. Morbi gravida luctus leo, at congue ligula convallis eget. Integer dignissim pellentesque mauris et dictum. Quisque lacinia hendrerit mauris vitae consequat. Morbi enim dolor, sollicitudin nec faucibus id, cursus nec elit. Quisque fermentum mollis pharetra. Nullam tellus dolor, eleifend ac odio et, finibus placerat diam. Etiam egestas, odio vel euismod tincidunt, leo mi lobortis metus, ac porttitor neque tortor et tellus. Ut consequat congue ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.
<br/><br/>

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Vivamus lacinia enim orci, ac gravida mi venenatis ut. Sed ut diam magna. Quisque pulvinar nulla nisl, id varius libero rhoncus ultricies. Nam ullamcorper nulla at risus egestas, eget imperdiet mi malesuada. Quisque id aliquet magna. Nunc nec diam tincidunt, maximus erat vitae, finibus erat. Ut diam neque, facilisis eget dolor eget, varius pharetra eros. Integer in nulla massa.
<br/><br/>

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis cursus massa at posuere. Duis et urna sed nisl fringilla sollicitudin vitae a dolor. Morbi iaculis volutpat odio et elementum. Nam ac elit vel tellus tempor hendrerit et ut justo. Integer quam massa, blandit id aliquet sit amet, elementum a tellus. Sed tempus quam vel dictum lacinia. Vestibulum cursus, velit ut hendrerit dictum, sem lacus mattis lorem, at euismod neque metus eu tellus. Vivamus vestibulum lorem id velit aliquam sodales. Vivamus ultrices a purus vel molestie.
<br/><br/>

Proin pulvinar dapibus velit. Morbi molestie tellus eget erat pellentesque, id tempus nunc sollicitudin. Donec quis velit vitae lorem ultrices vestibulum ut non ex. Curabitur nibh dolor, vulputate eget mattis nec, mattis quis felis. Donec rutrum, tortor vel sodales finibus, nulla ante pellentesque sem, a blandit augue sapien id arcu. Etiam non risus quis nisl convallis imperdiet. Curabitur mollis eleifend massa, at egestas lectus scelerisque in. Fusce nunc nisl, sodales volutpat erat vitae, tempus blandit ipsum. Sed scelerisque mauris at viverra ornare.
<br/><br/>

Maecenas maximus enim ut quam dictum blandit. Nulla facilisi. Nam porttitor sed lacus et convallis. Ut iaculis orci id gravida sagittis. Mauris quis pellentesque purus. Sed ligula leo, tempus quis eros a, ultrices gravida dolor. Nam sed scelerisque quam. Phasellus laoreet quis ex id dictum. Suspendisse non est mattis, blandit arcu at, faucibus massa. Quisque ut fringilla neque. Suspendisse potenti. Vivamus lobortis commodo pretium. Quisque lacinia, arcu quis vehicula ullamcorper, sem nisl facilisis tortor, sit amet dictum nisi ipsum ullamcorper justo.
<br/><br/>

Vivamus vitae tortor feugiat, ultricies odio a, rutrum nisl. Donec vel congue purus. Pellentesque ultricies orci molestie velit pellentesque, nec tincidunt sem scelerisque. Cras aliquet convallis vulputate. Morbi gravida luctus leo, at congue ligula convallis eget. Integer dignissim pellentesque mauris et dictum. Quisque lacinia hendrerit mauris vitae consequat. Morbi enim dolor, sollicitudin nec faucibus id, cursus nec elit. Quisque fermentum mollis pharetra. Nullam tellus dolor, eleifend ac odio et, finibus placerat diam. Etiam egestas, odio vel euismod tincidunt, leo mi lobortis metus, ac porttitor neque tortor et tellus. Ut consequat congue ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus.
<br/><br/>

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Vivamus lacinia enim orci, ac gravida mi venenatis ut. Sed ut diam magna. Quisque pulvinar nulla nisl, id varius libero rhoncus ultricies. Nam ullamcorper nulla at risus egestas, eget imperdiet mi malesuada. Quisque id aliquet magna. Nunc nec diam tincidunt, maximus erat vitae, finibus erat. Ut diam neque, facilisis eget dolor eget, varius pharetra eros. Integer in nulla massa.
`


const body = document.querySelector('body');
body.append(texto)

const progressbar = document.createElement('div')
progressbar.setAttribute('class', 'progress-bar')
body.append(progressbar)

//funcion que haga el calculo

const calcularPorcetajeScroll = (event)=>{
    const {
        clientHeight,
        scrollTop,
        scrollHeight
    } = event.target.documentElement;
    console.log({clientHeight,scrollTop,scrollHeight})
    return ( scrollTop / (scrollHeight - clientHeight))*100

}
//S T R E A M S
const scroll$ = fromEvent( document, 'scroll')

scroll$.pipe(
    map(calcularPorcetajeScroll)
).subscribe(porcentaje => {
    progressbar.style.width = `${porcentaje}%`
})


