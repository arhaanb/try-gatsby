import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBpiK1oyTpgqdUWXdm0VdssUlDWAuftWpI",
    authDomain: "portfolio-d248b.firebaseapp.com",
    databaseURL: "https://portfolio-d248b.firebaseio.com",
    projectId: "portfolio-d248b",
    storageBucket: "portfolio-d248b.appspot.com",
    messagingSenderId: "287550459150",
    appId: "1:287550459150:web:fe5ec64c8cbd2576b21b5f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase