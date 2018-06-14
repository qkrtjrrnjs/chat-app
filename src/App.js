import React, { Component } from 'react';

import './App.css';
import Main from './Main'
import SignIn from './SignIn'
import {auth} from './base'

class App extends Component {
  state = {
    user: {},
  }

  componentWillMount() {
    const user = JSON.parse(localStorage.getItem('user'))

    if (user) {
      this.setState({ user })
    }

    auth.onAuthStateChanged(
      user => {
        if (user) {
          this.handleAuth(user)
        } else {
          this.handleUnauth()
        }
      }
    )
  }

  handleAuth = (oauthUser) => {
    const user = {
      email: oauthUser.email,
      uid: oauthUser.uid,
      displayName: oauthUser.displayName,
    }
    this.setState({ user })
    localStorage.setItem('user', JSON.stringify(user))
  }

  signOut = () => {
    auth.signOut()
  }

  signedIn = () => {
    return this.state.user.uid
  }

  handleUnauth = () => {
    this.setState({ user: {} })
    localStorage.removeItem('user')
  }

  render() {
    return (
      <div className="App">
        {
          this.signedIn() ?
          <Main user={this.state.user} signOut={this.signOut} />
          : <SignIn handleAuth={this.handleAuth} />
        }
      </div>
    );
  }
}

export default App;
