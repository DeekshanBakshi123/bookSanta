import firebase from 'firebase'
require('@firebase/firestore')
  var firebaseConfig = {
    apiKey: "AIzaSyBCb8VFhvB2gm8A4oqltrS7XbXMdpWsP4E",
    authDomain: "booksanta-113c2.firebaseapp.com",
    projectId: "booksanta-113c2",
    storageBucket: "booksanta-113c2.appspot.com",
    messagingSenderId: "185294511090",
    appId: "1:185294511090:web:77dc55a01104fcd240696b"
  };
 firebase.initializeApp(firebaseConfig)
 export default firebase.firestore()