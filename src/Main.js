import React, {Component} from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'
import base from './base'

class Main extends Component{

    constructor() {
      super()

     this.state = {
        room: {},
        rooms: {},
        default: {  
          name: 'openchat',
          description: 'public chat room',
          public: true,
        }
      }
    }

    componentDidMount() {
      const { roomName } = this.props.match.params
      base.syncState(
        'rooms',
        {
          context: this,
          state: 'rooms',
          then: () => {
              this.loadRoom(roomName)
          },       
        }
      )
      this.addRoom(this.state.default)
    }
            

      componentDidUpdate(prevProps) {
        if (prevProps.match.params.roomName !== this.props.match.params.roomName) {
          this.loadRoom(this.props.match.params.roomName)
        }
      }

      filteredRooms = () => {
        return this.filteredRoomNames()
                   .map(roomName => this.state.rooms[roomName])
      }
    
      filteredRoomNames = () => {
        return Object.keys(this.state.rooms)
                .filter(roomName => {
                  const room = this.state.rooms[roomName]
                  if (!room) return false
                  return room.public || this.includesCurrentUser(room)
                })
      }
    
      includesCurrentUser = (room) => {
        const members = room.members || []
        return members.find(
          userOption => userOption.value === this.props.user.uid
        )
      }

      loadRoom = (roomName) => {
        if (roomName === 'new') return null
    
        const room = this.filteredRooms()
                         .find(room => room.name === roomName)
    
        if (room) {
          this.setState({ room })
        } else {
          this.loadValidRoom()
        }
      }

      addRoom = (room) => {
        const rooms = {...this.state.rooms}
        rooms[room.name] = room
        this.setState({ rooms })
      }

      removeRoom = (room) => {
        const rooms = {...this.state.rooms}
        rooms[room.name] = null
    
        this.setState(
          { rooms },
          this.loadValidRoom,
        )
      }

      loadValidRoom = () => {
        const realRoomName = this.filteredRoomNames().find(
          roomName => this.state.rooms[roomName]
        )
        
        this.props.history.push(`/rooms/${realRoomName}`)    
      }
    
      render() {
        return (
          <div className="Main" style={styles}>
            <Sidebar
              user={this.props.user}
              signOut={this.props.signOut}
              users={this.props.users}
              rooms={this.filteredRooms()}
              addRoom={this.addRoom}
            />
            <Chat
              user={this.props.user}
              room={this.state.room}
              removeRoom={this.removeRoom}
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