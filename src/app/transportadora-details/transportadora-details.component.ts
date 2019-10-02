import { Transportadora } from './../transportadora';
import { Component, OnInit, Input } from '@angular/core';
import { TransportadoraService } from '../transportadora.service';
import { TransportadoraListComponent } from '../transportadora-list/transportadora-list.component';

@Component({
  selector: 'app-transportadora-details',
  templateUrl: './transportadora-details.component.html',
  styleUrls: ['./transportadora-details.component.css']
})
export class TransportadoraDetailsComponent implements OnInit {

  @Input() transportadora: Transportadora;

  constructor(private transportadoraService: TransportadoraService, private listComponent: TransportadoraListComponent) { }

  ngOnInit() {
  }
}