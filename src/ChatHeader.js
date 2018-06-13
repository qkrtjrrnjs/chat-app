import React from 'react'

const ChatHeader = () => {
    return(
        <div 
            className="ChatHeader"
            style={styles.ChatHeader}
        >
            <div className="roomInfo">
                <h2 style={styles.H2}>#general</h2>
                <p style={styles.P}>Announcements and general chat</p>
            </div>
        </div>
    )
}

const styles = {
    ChatHeader: {
        backgroundColor: '#f3f3f3',
        borderBottom: '1px solid #ccc',
        height: '4rem',
        padding: '0 1rem',
        display: 'flex',
        alignItems: 'center',
    },
      
    H2: {
        fontSize: '1.3rem',
        margin: '0',
    },
    
    P: {
        color: '#999',
        margin: '0',
        fontSize: '0.9rem',
    },
}

export default ChatHeader