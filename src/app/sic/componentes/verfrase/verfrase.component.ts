import { Component, OnInit } from "@angular/core";
import { ApiService } from "../../servicios/api.service";
import { User } from "../../modelos/user";

@Component({
  selector: "app-verfrase",
  templateUrl: "./verfrase.component.html",
  styleUrls: ["./verfrase.component.css"]
})
export class VerfraseComponent implements OnInit {
  public frase: User = { meta: {pagination: { total: 0, pages: 0, page: 0, limit: 0, links: { previous: "", current: "", next: "" } } }, data: [ { id: 0, name: "", email: "", gender: "", status: "" } ]  };
  
  constructor(private apiservice: ApiService) {
    //console.log("VerfraseComponent::constructor()");
  }

  /*public fraseRecibida(frase: Frase) {
    console.log("fraseRecibida. " + frase.value);
    this.frase = frase;
    debugger;
  } */

  ngOnInit() {
    this.apiservice.getFrase().subscribe(frase => (this.frase = frase));
    console.log("ngOnInit. FIN");
    //this.apiservice.getFrase().subscribe(this.fraseRecibida);
  }
}
