import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
<<<<<<< HEAD
import { initializeApp } from 'firebase/app';
import { AppComponent } from './app/app'; 
import { firebaseConfig } from './app/config/Firebase.config';

initializeApp(firebaseConfig);
=======

import { AppComponent } from './app/app'; 

>>>>>>> f97593bb23978f6336a652ca057a0e40d5eb3b49
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));