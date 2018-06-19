import React, {Component} from 'react'

import Message from './Message'

class MessageList extends Component{
    componentDidUpdate(prevProps){
        if(prevProps.messages.length < this.props.messages.length){
            this.scrollToBottom()
        }
    }

    scrollToBottom = () =>{
        this.messagesEnd.scrollIntoView({behavior: 'smooth'})
    }

    render(){
        const {messages, room} = this.props
        return(
            <div className="MessageList" style={styles.MessageList}>
             <div className="roomAnnouncement" style={styles.Announcement}>
                   <h3 style={styles.h3}>#{room.name}</h3>
                    <p>This is the very beginning of the #{room.name} room.</p>
              </div>
             {
                  messages.map(msg => <Message key={msg.id} message={msg} />)
              }
              <div className="end" ref={el=> this.messagesEnd = el}></div>
          </div>
        )
    }
}

const styles = {
    MessageList: {
        backgroundColor: '#c3d7df',
        flex: '1',
        paddingBottom: '1rem',
        overflowY: 'scroll',
        paddingLeft: '1.5rem',
    },

    Annoucement: {
        padding: '2rem 1rem',
    },
    
    H3: {
        fontSize: '1.5rem',
    },

}

export default MessageList