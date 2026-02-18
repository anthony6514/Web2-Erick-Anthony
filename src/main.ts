import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { initializeApp } from 'firebase/app';
import { AppComponent } from './app/app'; 
import { firebaseConfig } from './app/config/Firebase.config';

initializeApp(firebaseConfig);
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));