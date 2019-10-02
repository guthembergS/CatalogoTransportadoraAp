import { Observable } from "rxjs";
import { TransportadoraService } from "./transportadora.service";
import { Transportadora } from "./transportadora";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-transportadora-list",
  templateUrl: "./transportadora-list.component.html",
  styleUrls: ["./transportadora-list.component.css"]
})
export class TransportadoraListComponent implements OnInit {
  transportadoras: Observable<Transportadora[]>;

  constructor(private transportadoraService: TransportadoraService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.transportadoras = this.transportadoraService.getTransportadoraList();
  }

  deleteTransportadora(id: number) {
    this.transportadoraService.deleteTransportadora(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
}