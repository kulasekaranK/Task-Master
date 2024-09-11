import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp} from '@angular/fire/app'
import { initializeApp } from 'firebase/app';
import { provideAuth} from '@angular/fire/auth';
import { provideFirestore} from '@angular/fire/firestore'
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD-gSkei75s1GYACeyOpiB9IuhpTtN_c8g',
  authDomain: 'taskmaster-v1.firebaseapp.com',
  projectId: 'taskmaster-v1',
  storageBucket: 'taskmaster-v1.appspot.com',
  messagingSenderId: '649629066740',
  appId: '1:649629066740:web:97f9b25c7ac3920d65c5a1',
  measurementId: 'G-XZX03GK3BS',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(()=>initializeApp(firebaseConfig)),
    provideFirestore(()=>getFirestore()),
    provideAuth(()=>getAuth()),
    
    
  ],
};
