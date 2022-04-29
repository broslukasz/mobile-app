Ionic
---
https://ionicframework.com/docs/intro/cli
npm install -g @ionic/cli
ionic start

Firebase
---
- https://firebase.google.com/docs/web/setup?authuser=0&hl=en
- https://developers.google.com/codelabs/building-a-web-app-with-angular-and-firebase#8
ng add @angular/fire
ng deploy

Developing for Android
---
- https://ionicframework.com/docs/developing/android
adb devices

-add native project:
ionic capacitor add android

- set package Id
capacitor.config.json

- run project
ionic capacitor copy android

Open in Android Studio

Firebase use
---

private store: AngularFirestore

remember to add in module (for Angular)
{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }

