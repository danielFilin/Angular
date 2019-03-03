import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

  
  @Injectable()
  
  export class ServersService {

    constructor(private http: Http) {}

    storeService(servers: any[]){
        const myHeaders = new Headers({'Content-Type': 'application/json'})
        // return this.http.post('https://filind85-2.firebaseio.com/data.json', servers, {headers: myHeaders})
        return this.http.put('https://filind85-2.firebaseio.com/data.json', servers, {headers: myHeaders})
    }

    getServers(){
        return this.http.get('https://filind85-2.firebaseio.com/data.json', )
        .map(
            (response: Response) => {
                const data = response.json();
                for (const server of data) {
                    server.name = 'Fetched_' + server.name;
                }
                return data; 
            }
        )
        .catch(
            (error: Response) => { 
                return Observable.throw("Something went wrong");
            }
        )
    }

    getAppName(){
        return this.http.get('https://filind85-2.firebaseio.com/NewName.json')
        .map(
            (response: Response) => {
                return response.json();
            }
        )
      }
  }