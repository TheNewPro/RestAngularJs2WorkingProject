import { Component } from '@angular/core';


import {Http} from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  	template: `
	  <b>Angular 2 HTTP requests using RxJs Observables!</b>
	  <ul>
	    <li *ngFor="let doctor of doctors">{{doctor.prenom}}</li>
	  </ul>
	  
	  `
})
export class AppComponent {
 private doctors = [];
  
  constructor(http: Http) {
 
    http.get('http://jsonplaceholder.typicode.com/users/')

   // http.get('http://localhost:8080/TP-Infosat/Services/Users')
        .flatMap((data) => data.json())
        .subscribe((data) => {
          this.doctors.push(data);

        });
  }
}
