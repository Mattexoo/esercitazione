import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'piatti',
  templateUrl: './piatti.component.html',
  styleUrls: ['./piatti.component.css']
})
export class PiattiComponent {
  @Input() piatti: any = ""; // Dati ricevuti dal componente padre
  @Output() idSelezionato = new EventEmitter<string>(); // Evento per comunicare l'ID al padre

  // Metodo per emettere l'ID selezionato
  selezionaPiatto(id: string) {
    this.idSelezionato.emit(id);
  }
}
