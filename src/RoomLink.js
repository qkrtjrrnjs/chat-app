import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import { NavLink } from 'react-router-dom'

const RoomLink = ({ room, user }) => {

    const userValidation = () =>{
      for (let i = 0; i < room.users.length; i++) {
        if(room.users[i].value === user.uid){
          return true
        }
      }
      return false
    }

    return (
      
      <li className={css(styles.item)}>
        <NavLink
          to={`/rooms/${room.name}`}
          className={css(styles.link)}
        >
        <div>
          { (room.public) ? '#' + room.name: (userValidation()) ? '#' + room.name: '' }
        </div>
        </NavLink>
      </li>
    )
}

const styles = StyleSheet.create({
    item: {
      marginBottom: '0.5rem',
    },
  
    link: {
      display: 'block',
      color: 'whitesmoke',
      textDecoration: 'none',
  
      /*
      '::before': {
        content: '"# "',
      },
      */
  
      ':hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      }
    },
})

export default RoomLink