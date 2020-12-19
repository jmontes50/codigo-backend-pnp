import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAzx6qu9Y8y2_4v8TTv6vCdfQqMbgqivUk",
  authDomain: "project-back-fb55c.firebaseapp.com",
  projectId: "project-back-fb55c",
  storageBucket: "project-back-fb55c.appspot.com",
  messagingSenderId: "584945887677",
  appId: "1:584945887677:web:83c945c726c7d9eb514ad4",
};

// fire, representa todo firebase
const fire = firebase.initializeApp(config);

export {fire as default}