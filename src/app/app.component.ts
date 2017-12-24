import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses: any[];
  constructor(private db: AngularFireDatabase) {
    db.list('/courses').valueChanges().subscribe(courses => {
      this.courses = courses;
      console.log(this.courses);
    // tslint:disable-next-line:max-line-length
    }); // AngularFire built in host methods, list is to read multiple objects, returns an Observable, we add valueChanges additionally since angularDB is a list
  }
}
