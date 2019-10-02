import { TransportadoraService } from './../transportadora.service';
import { Transportadora } from './../transportadora';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-transportadora',
  templateUrl: './create-transportadora.component.html',
  styleUrls: ['./create-transportadora.component.css']
})

export class CreateTransportadoraComponent implements OnInit {

	transportadora: Transportadora = new Transportadora();
	submitted = false;


  constructor(private transportadoraService: TransportadoraService) { }

  ngOnInit() {
  }

  newTransportadora(): void {
    this.submitted = false;
    this.transportadora = new Transportadora();
  }

  save() {
    this.transportadoraService.createTransportadora(this.transportadora)
      .subscribe(data => console.log(data), error => console.log(error));
    this.transportadora = new Transportadora();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
