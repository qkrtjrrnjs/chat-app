import React, {Component} from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component{

    constructor() {
      super()

     this.state = {
       room: {}
      }
    }

    /*state = {
        room: {
          name: 's2morning',
          description: 'Chatter about the actual class',
        }
    }*/

      componentDidMount() {
        this.loadRoom({
          name: this.props.match.params.roomName,
        })
      }
    
      componentDidUpdate(prevProps) {
        if (prevProps.match.params.roomName !== this.props.match.params.roomName) {
          this.loadRoom({
            name: this.props.match.params.roomName,
          })
        }
      }

      loadRoom = (room) => {
        this.setState({ room })
      }
    
      render() {
        return (
          <div className="Main" style={styles}>
            <Sidebar
              user={this.props.user}
              signOut={this.props.signOut}
            />
            <Chat
              user={this.props.user}
              room={this.state.room}
            />
          </div>
        )
      }
}

const styles = {
    display: 'flex',
    alignItems: 'stretch',
    height: '100vh',
    overflowWrap: 'break-word',
}

export default Main