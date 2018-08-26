import Rebase from 're-base'
import firebase from 'firebase'


  const config = {
    apiKey: 'AIzaSyDX5hmsgt_p0girTBxyCq9t8Ty_Y9tfYS0',
    authDomain: 'bora-ajudar08.firebaseapp.com',
    databaseURL: 'https://bora-ajudar08.firebaseio.com',
    projectId: 'bora-ajudar08',
    storageBucket: 'bora-ajudar08.appspot.com',
    messagingSenderId: '713959566700'
  }

  const app = firebase.initializeApp(config)
  const Base = Rebase.createClass(app.database())

  export const auth = firebase.auth()
  
  export default Base
