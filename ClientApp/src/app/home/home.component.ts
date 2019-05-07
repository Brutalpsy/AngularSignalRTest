import { Component, OnInit } from "@angular/core";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  public message = "";
  public messagees: string[] = [];
  public hubConnection: HubConnection;
  constructor() {}
  echo() {
    this.hubConnection.invoke("Echo", this.message);
  }
  ngOnInit(): void {
    this.hubConnection = new HubConnectionBuilder().withUrl("/echo").build();

    this.hubConnection.on("Send", x => {
      this.messagees.push(x);
    });
    this.hubConnection
      .start()
      .then(() => console.log("Started"))
      .catch(() => console.log("error"));
  }
}
