import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CricketApiComponent } from "./cricket-api/cricket-api.component";
import { from } from "rxjs";
import { PlayerstaticsComponent } from "./playerstatics/playerstatics.component";
import { PostComponent } from "./post/post.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    CricketApiComponent,
    PlayerstaticsComponent,
    PostComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
