// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase :{ 
    apiKey: "AIzaSyDsYCqvzVeJd19zlPtga6KQ2u8UAlUDNmw",
    authDomain: "taskcontroller-cnam.firebaseapp.com",
    databaseURL: "https://taskcontroller-cnam.firebaseio.com",
    projectId: "taskcontroller-cnam",
    storageBucket: "taskcontroller-cnam.appspot.com",
    messagingSenderId: "255609981481"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
