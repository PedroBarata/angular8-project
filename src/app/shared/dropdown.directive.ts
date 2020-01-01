import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[appDropdown]"
})
export class DropdownDirective {
  /* Mais fácil usar essa abordagem com o hostBinding/hostListener, 
    pois alteramos diretamente o componente em questão (Host), 
    sem precisar criar props nos componentes ou algo do tipo, 
    ao contrário caso usássemos o decorator de @Input() */

  //Binding que queremos fazer, ao clicar no botao, colocar a classe 'open' do bootstrap
  @HostBinding("class.open") isOpen = false;
  //Listener do evento, que, ao clicarmos, altera o valor do binding
  @HostListener("click") toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
