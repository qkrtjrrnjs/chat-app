import React from 'react'

import Message from './Message'

const MessageList = (props) => {
    return(
        <div className="MessageList" style={styles.MessageList}>
            <div className="roomAnnouncement" style={styles.Announcement}>
                <h3 style={styles.h3}>#general</h3>
                <p>This is the very beginning of the #general room.</p>
            </div>
            {
                props.messages.map(msg => <Message key={msg.id} message={msg} />)
            }
        </div>
    )
}

const styles = {
    MessageList: {
        backgroundColor: '#c3d7df',
        flex: '1',
        paddingBottom: '1rem',
        overflowY: 'scroll',
        paddingLeft: '1.5rem',
    },

    /*.MessageList .roomAnnouncement*/
    Annoucement: {
        padding: '2rem 1rem',
    },
    
    /*.MessageList .roomAnnouncement h3*/
    H3: {
        fontSize: '1.5rem',
    },

}

export default MessageList