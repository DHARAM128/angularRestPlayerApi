import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-playerstatics",
  templateUrl: "./playerstatics.component.html",
  styleUrls: ["./playerstatics.component.css"]
})
export class PlayerstaticsComponent implements OnInit {
  private playerUrl =
    "https://cricapi.com/api/playerStats?apikey=EkZq74XxfUPiChHkPpFYOsRN0oY2&pid=";

  constructor(private http: HttpClient) {}
  playerInfo: true;
  searchPlayer(pid) {
    this.http.get<any>(`${this.playerUrl} ${pid}`).subscribe(user => {
      this.playerInfo = user;
    });
  }

  ngOnInit() {}
}
