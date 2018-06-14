import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'

import RoomLink from './RoomLink'

class RoomList extends Component{
  state = {
    rooms: {
      general : {
        name: 'general',
        description: 'let\'s chat',
        messages: [],
      },

      s2morning : {
        name: 's2morning',
        description: 'chatter',
        messages: [],
      },

      random : {
        name: 'random',
        description: 'chaaaat',
        messages: [],
      }

    }
  }

  render(){
    return (
      <nav
        className={`RoomList ${css(styles.nav)}`}
      >
        <h2 className={css(styles.h2)}>Rooms</h2>
        <ul className={css(styles.list)}>
          {
            Object.keys(this.state.room).map(roomName => (
              <RoomLink 
                key={roomName} 
                room={this.state.rooms[roomName]} 
                loadRoom={this.props.loadRoom}
              />
            ))
          }
        </ul>
      </nav>
    )
  }
}

const styles = StyleSheet.create({
  nav: {
    padding: '0 1rem',
  },

  h2: {
    fontSize: '1rem',
  },

  list: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },

  item: {
    marginBottom: '0.5rem',
  },

  link: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',

    '::before': {
      content: '"# "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    }
  },
})

export default RoomList