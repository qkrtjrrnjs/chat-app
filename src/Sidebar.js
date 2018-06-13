import React from 'react'

import Userinfo from './Userinfo'

const Sidebar = (props) => {
    
    return(
        <aside
            className="Sidebar"
            style={styles.sidebar}
        >
            <Userinfo user={props.user} />
            <h1
                style={{
                    ...styles.children,
                    ...styles.h1,
                }}
            >
                XTBC 18
            </h1>
            <div
                className="UserInfo"
                style={styles.children}
            >
                <div className="Avatar"></div>
                <div className="user">
                    {props.user.userName}
                </div>
                <a href="#">
                    <i className="fas fa-sign-out-alt"></i>
                </a>
            </div>
                <nav
                    className="RoomList"
                    style={styles.children}
                >
                    <h2>Rooms</h2>
                    <ul>
                        <li><a href="#">general</a></li>
                        <li><a href="#">random</a></li>
                    </ul>
            </nav>
        </aside>
    )    
    
}

const styles = {
    sidebar: {
        backgroundColor: '#6991ac',
        color: '#f5f5f5',
        width: '15rem',
        padding: '1rem 0',
        display: 'flex',
        flexDirection: 'column',
    },
    
    children: {
        padding: '0 1rem',
    },

    h1: {
        color: '#f5f5f5',
        fontSize: '1.2rem',
        marginTop: 0,
    },
}

export default Sidebar