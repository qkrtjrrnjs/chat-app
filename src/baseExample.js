import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import Rebase from 're-base'

//initialize firebase

const config = {
    apiKey: "your apiKey",
    authDomain: "your authDomain",
    databaseURL: "your databaseUrl",
    projectId: "your projectId",
    storageBucket: "your storageBucket",
    messagingSenderId: "your messagingSenderId"
  }

const app = firebase.initializeApp(config)
const db = app.database()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const auth = firebase.auth()

export default Rebase.createClass(db)


