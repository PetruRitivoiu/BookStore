import firebase from 'firebase' //trebuie instalat separat, nu vine cu webpack
import 'firebase/database'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.database()
