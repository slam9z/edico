// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyAP8VqeXJTs5clwSfAAktbHopR_LRoQnRA',
    authDomain: 'bfoin-app.firebaseapp.com',
    databaseURL: 'https://bfoin-app.firebaseio.com',
    projectId: 'bfoin-app',
    storageBucket: '',
    messagingSenderId: '963386838127'
  }
};
