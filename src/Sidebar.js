import React from 'react'

import Userinfo from './Userinfo'
import RoomList from './RoomList'

const Sidebar = ({ user, signOut }) => {
    
    return(
        <aside
            className="Sidebar"
            style={styles.sidebar}
        >
            <Userinfo user={user} signOut={signOut}/>
            <h1 style={styles.h1}>XTBC 18</h1>
            <RoomList />
        </aside>
    )    
    
}

const styles = {
    sidebar: {
        backgroundColor: '#333344',
        color: 'rgba(255, 255, 255, 0.8)',
        width: '12rem',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
        width: '17vw',
      },
    
      h1: {
        color: 'white',
        fontSize: '1.2rem',
        marginTop: '0',
        padding: '0 1rem',
      },
}

export default Sidebar