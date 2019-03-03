import { Component } from '@angular/core';
import { ServersService } from './servers.service';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent  {

  appName = this.serversService.getAppName();

  constructor(private serversService: ServersService){}

    servers = [
      {
        name: "Testserver",
        capacity: 10,
        id: this.generatedId()
      },
      {
        name: "Liveserver",
        capacity: 100,
        id: this.generatedId()
      }
    ];

    private generatedId(){
      return Math.round(Math.random()*10000);
    }


  onAddServer(name: string) {
    this.servers.push({
      name: name, 
      capacity: 50,
      id: this.generatedId()
    });
  }


    onSave(){
      this.serversService.storeService(this.servers)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    }

    onGet(){
      this.serversService.getServers()
      .subscribe(
        (servers: any[]) => this.servers = servers,
        (error) => console.log(error)
      )
    }

  

}