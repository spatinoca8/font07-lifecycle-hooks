import { afterNextRender, afterRender, Component, effect, OnChanges, OnInit, signal } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';

const log=(...messages:string[])=>{
  console.log(`${messages[0]} %c${messages.slice(1).join(' ')}`, 'color:green; font-weight:bold;');
}

@Component({
  selector: 'app-home-page',
  imports: [TitleComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit,OnChanges {

  tradicionalPrperty ='Silvia'
  signalProperty= signal('Silvia')
 constructor(){
   log('constructor llamado');
  //  setTimeout(()=>{
  //   //  this.tradicionalPrperty = 'Silvia E Patino'; aca no se ekecuta porque no se esta usando zonejs
  //   this.signalProperty.set('Silvia E Patino'); // aca si se ejecuta porque es un signal
  //     console.log('hecho')
  //  },2000)
 }
basicEffect=effect((onCleanup)=>{
  log('basicEffect ', 'Dispara eventos secundarios.');
  onCleanup(()=>{
    log('basicEffect cleanup ', 'Se ejecuta cuando el efecto se va a destruir.');
  })
});

ngOnInit(){
   log('ngOnInit ', 'Se ejecuta una sola vez después de que Angular haya inicializado todas las entradas del componente.');
 }
ngOnChanges(){
   log('ngOnChanges ', 'Se ejecuta cada vez que cambian las entradas del componente.');
 }
ngDoCheck(){
   log('ngDoCheck ', 'Se ejecuta cada vez que se comprueba si este componente ha cambiado.');
 }
ngAfterContentInit(){
   log('ngAfterContentInit ', 'Se ejecuta una sola vez después de que se haya inicializado el contenido del componente.');
 }
ngAfterContentChecked(){
   log('ngAfterContentChecked ', 'Se ejecuta cada vez que se comprueba si hay cambios en el contenido de este componente.');
 }
ngAfterViewInit(){
   log('ngAfterViewInit ', 'Se ejecuta una sola vez después de que se haya inicializado la vista del componente.');
 }
 ngOnDestroy(){
   log('ngOnDestroy ', 'Se ejecuta cuando se destruye el componente.');
 }
 afterNextRenderEffect= afterNextRender(()=>{
  log('afterNextRender ', 'Se ejecuta después de que se haya renderizado el componente.');
 });
 afterRender=afterRender(()=>{
  log('afterRender ', 'Se ejecuta cada vez que angular completa un ciclo de deteccion de cambios y actualiza el dom.');
 })
 changeTradicional(){
   this.tradicionalPrperty = 'Silvia E Patino';
 }
 changeSignal(){
   this.signalProperty.set('Silvia E Patino');
 }
}
