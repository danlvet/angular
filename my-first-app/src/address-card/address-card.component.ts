import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  user: any;
  // tslint:disable-next-line:no-input-rename
  @Input('name') userName: string;

  constructor() {

  }

  ngOnInit() {
    this.user = {
      name: this.userName,
      organisation: 'ICT',
      mainsector: 'Ingegneria e Architettura',
      secondsector: 'Ingegneria delle Applicazioni',
      title: 'Tecnico ICT',
      address: 'Via Cavalli 6, Torino, Italia',
      cell: ['+39 3387095373', '+011 8102506', '0934672509']
  };
}
}
