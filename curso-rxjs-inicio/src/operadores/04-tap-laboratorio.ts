
import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');
texto.innerHTML=`
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae mi aliquet, feugiat mi ut, ullamcorper quam. Ut suscipit, arcu in imperdiet aliquam, ante ligula vulputate massa, in malesuada nisl ligula sed augue. Proin nec arcu eu est imperdiet viverra nec ac ante. Praesent sit amet nisl tortor. Quisque non turpis accumsan, maximus dolor pulvinar, tristique purus. Vivamus tempor, dolor vel euismod sagittis, nisi dolor efficitur odio, vitae malesuada tortor tellus et turpis. Nullam vehicula vulputate ligula, eget porta nisl interdum eu. Sed euismod sapien nunc, quis commodo lacus congue sit amet. Vestibulum ornare eleifend mauris. Ut vel neque vitae justo hendrerit elementum. In pulvinar vehicula ante at posuere. Mauris eleifend, neque id viverra malesuada, massa eros interdum lacus, efficitur rutrum urna tellus a nisl.
<br/><br/>
Pellentesque hendrerit fermentum sapien vel facilisis. Cras ac sagittis purus. Curabitur at cursus urna, ut posuere arcu. Fusce id ullamcorper nunc. In mollis enim et ultricies elementum. Etiam commodo orci orci, in ultrices dui auctor sed. Praesent volutpat vestibulum eros ac dapibus. Nunc vel ex id mauris vehicula porta eget et dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in tortor ex. Integer id maximus sapien. Sed dignissim nisl gravida ipsum ultricies vehicula.
<br/><br/>
Praesent velit ipsum, dignissim et blandit gravida, faucibus eu justo. Nulla fringilla mattis neque, eget iaculis orci faucibus vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin convallis dolor accumsan luctus porttitor. Vivamus ac blandit eros. Ut nec vestibulum velit. Integer nec dolor eu ipsum venenatis placerat. Fusce elementum lacus vel mauris molestie ullamcorper. Nunc ac porttitor velit, varius vehicula lacus. Sed vitae neque ut tellus egestas pretium.
<br/><br/>
Mauris id dolor tempor, cursus magna ac, faucibus leo. Maecenas vel nisl accumsan metus tempor porta. Phasellus semper nisi nec magna dapibus, sed ullamcorper lacus vestibulum. Etiam diam sem, commodo non dapibus id, maximus in est. Pellentesque malesuada est nec diam pretium malesuada. Ut elit orci, tempus sit amet nunc quis, aliquam aliquam sem. Aenean dignissim eleifend sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean tristique eros eget purus suscipit, a vestibulum eros ornare. Nam quis fringilla quam. Sed eget arcu ornare, efficitur orci in, mattis odio. Nunc vel feugiat metus. Nulla dignissim hendrerit volutpat. Vivamus non urna quis quam lacinia pretium. Nullam ac nisl faucibus, blandit sem sit amet, varius erat.
<br/><br/>
Sed interdum bibendum risus, ac lacinia libero accumsan et. Fusce mattis lectus erat, et ultrices urna aliquet quis. In quis mi congue, laoreet ante ac, dapibus mi. Morbi vitae nunc mauris. Quisque purus enim, molestie placerat velit eget, suscipit convallis enim. Cras sit amet volutpat nulla. Vivamus vel risus et nulla viverra fringilla a non ipsum. Quisque euismod scelerisque urna. Donec mollis interdum dui vel semper. Nunc lobortis dolor vitae erat vulputate, ac tristique lacus varius. Vivamus varius ultrices ante. Integer eleifend, felis et elementum iaculis, velit purus pulvinar eros, at pulvinar ex ipsum eu massa. Phasellus ac risus risus. Duis dictum eu sem a vestibulum. Nunc quis consequat neque. Etiam semper gravida dui, quis convallis quam vulputate vitae.
<br/><br/>
Generated 5 paragraphs, 512 words, 3404 bytes of Lorem Ipsum
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//funcion que realizá el calculo
const calcularProcentajeScroll = (event)=>{
    const { 
        clientHeight,
        scrollTop,
        scrollHeight
    } = event.target.documentElement;
    
    //console.log({clientHeight,scrollTop,scrollHeight})

    return ( scrollTop / (scrollHeight - clientHeight))*100
}
//Sream
const scroll$ = fromEvent( document, 'scroll');

const progress$ = scroll$.pipe(
    map(event=> calcularProcentajeScroll(event)),
    tap(console.log)
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})


