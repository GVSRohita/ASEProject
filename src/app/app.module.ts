import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {MatToolbarModule} from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';



const firebaseConfig = {
  apiKey: "AIzaSyBCSIy12DpqoJX1JBZsz08g2QgNV30FoQU",
  authDomain: "my-first-project-ase-lab-5.firebaseapp.com",
  databaseURL: "https://my-first-project-ase-lab-5.firebaseio.com",
  projectId: "my-first-project-ase-lab-5",
  storageBucket: "",
  messagingSenderId: "642327932662",
  appId: "1:642327932662:web:b68d0c87c5be8d539786d7"
};

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(appRoutes)
  ],

  // exports: [MatToolbarModule],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
