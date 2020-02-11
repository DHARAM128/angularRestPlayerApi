import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cricket-api",
  templateUrl: "./cricket-api.component.html",
  styleUrls: ["./cricket-api.component.css"]
})
export class CricketApiComponent implements OnInit {
  private playerUrl =
    "https://cricapi.com/api/playerFinder?apikey=EkZq74XxfUPiChHkPpFYOsRN0oY2&name=";

  constructor(private http: HttpClient) {}
  playerInfo = [];
  searchPlayer(player) {
    this.http.get<any>(`${this.playerUrl} ${player}`).subscribe(user => {
      this.playerInfo = user.data;
    });
  }

  ngOnInit() {}
}
