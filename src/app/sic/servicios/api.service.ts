import { Injectable } from "@angular/core";
import { User } from "../modelos/user";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private frase: User = { meta: {pagination: { total: 0, pages: 0, page: 0, limit: 0, links: { previous: "", current: "", next: "" } } }, data: [ { id: 0, name: "", email: "", gender: "", status: "" } ]  };
  private SicUrl = "https://gorest.co.in/public/v1/users"; // URL to web api

  constructor(private http: HttpClient) { }

  //----------------------------------------------------------------

  public getFrase(): Observable<User> {
    return this.http.get<User>(this.SicUrl);
  }
}
