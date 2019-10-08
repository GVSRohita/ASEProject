import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import {User} from '../../Models/user';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-search-food',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('foodItem') foodItem: ElementRef;
  user = {} as User;
  constructor(private _http: HttpClient, private router: Router, private firebaseauth: AngularFireAuth) {
  }

  register(user: User) {
    // this.router.navigate(['/register']);
    var route = this.router;
    try {
      this.firebaseauth.auth.createUserWithEmailAndPassword(user.email, user.password).then(function () {
        route.navigate(['/login']);
        user.email="";
        user.password="";
      }).catch((e) => {
        debugger;
        alert(e);
      });
    } catch(e) {
      console.error(e);
    }
  }



}
