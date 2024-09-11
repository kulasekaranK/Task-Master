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
  apiKey: '',
  authDomain: 'taskmaster-v1.firebaseapp.com',
  projectId: 'taskmaster-v1',
  storageBucket: 'taskmaster-v1.appspot.com',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
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
