import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const RoomList = ({channel}) => {

  function handleClickGeneral(ev){
    ev.preventDefault()
    channel = channels.general
  }

  function handleClickRandom(ev){
    ev.preventDefault()
    channel = channels.random
  }

  return (
    <nav
      className={`RoomList ${css(styles.nav)}`}
    >
      <h2 className={css(styles.h2)}>Rooms</h2>
      <ul className={css(styles.list)}>
        <li className={css(styles.item)}>
          <a href="##" className={css(styles.link)} onClick={handleClickGeneral}>general</a>
        </li>
        <li className={css(styles.item)}>
          <a href="##" className={css(styles.link)} onClick={handleClickRandom}>random</a>
        </li>
      </ul>
    </nav>
  )
}

const channels = {
  general: 'general/messages',
  random: 'random/messages',
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