import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import firebase from 'firebase/compat/app';
import { environment } from './environments/environment';
import 'firebase/compat/auth';

// let appInit = false;
// firebase.initializeApp(environment.firebase);
// firebase.auth().onAuthStateChanged(() => {
//   if (!appInit) {

//     appInit = true;
//   }
// });
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
