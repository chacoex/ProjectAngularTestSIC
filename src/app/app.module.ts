import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";

import { ChuckModule } from "./sic/chuck.module"; //<------

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ChuckModule], //<-----
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
