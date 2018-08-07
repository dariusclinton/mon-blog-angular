import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCRd0HoNinmRVvZIy6pxnxrreMSimjvlqk',
      authDomain: 'mon-blog-angular.firebaseapp.com',
      databaseURL: 'https://mon-blog-angular.firebaseio.com',
      projectId: 'mon-blog-angular',
      storageBucket: '',
      messagingSenderId: '519254921376'
    };
    firebase.initializeApp(config);
  }


}
