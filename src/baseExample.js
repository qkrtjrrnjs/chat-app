import firebase from 'firebase/app'
import database from 'firebase/database'
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

export default Rebase.createClass(db)


