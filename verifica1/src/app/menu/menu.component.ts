import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  menu: any = "";
  response: any = "";
  selectedItem: any = null; // Memorizza l'elemento selezionato
  idDalFiglio:any = "";

  async ngOnInit (): Promise<any> {
    this.response = await fetch("http://localhost:8888/getMenu")
    this.menu = await this.response.json();
    console.log(this.menu);
  }

  miaClasse: any = ""
  async funzioneC(item : any){
    this.response = await fetch("http://localhost:8888/getPlates",
    {
      method:"POST",
      headers: {"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"},
      body: JSON.stringify({menu:item})
    });
    this.selectedItem = await this.response.json();
    console.log(this.selectedItem);
  }

  onIdSelezionato(id: string) {
    this.idDalFiglio = id;
    console.log('ID ricevuto dal figlio:', id);
  }

}

