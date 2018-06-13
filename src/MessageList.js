import React from 'react'

import Message from './Message'

const MessageList = (props) => {
    return(
        <div 
            className="MessageList"
            style={styles.MessageList}
        >
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
    RoomAnnoucement: {
        padding: '2rem 1rem',
    },
    
    /*.MessageList .roomAnnouncement h3*/
    H3: {
        fontSize: '1.5rem',
    },

}

export default MessageList