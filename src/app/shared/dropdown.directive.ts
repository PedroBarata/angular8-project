import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

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
  /* @HostListener("click") toggleOpen() {
    this.isOpen = !this.isOpen;
  } */


  /* Caso quisermos passar o evento de click para fechar o 
  dropdown ao clicarmos em outra parte da pagina, podemos usar o document:click */
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    /* Caso a referencia do elemento for a mesma do evento, 
    ou seja, estamos clicando no mesmo componente, altera o valor do isOpen, caso contrário, fecha (false) */
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
