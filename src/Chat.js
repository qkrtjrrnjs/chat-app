import React, { Component } from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

import base from './base'

class Chat extends Component{
    constructor(){
        super()

        this.state = {
            messages: [],
            rebaseBinding: null
        }
    }

    componentWillMount() {
        this.syncMessages()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.room.name !== this.props.room.name) {
          this.syncMessages()
        }
      }

    syncMessages = () => {
        if (this.state.rebaseBinding) {
          base.removeBinding(this.state.rebaseBinding)
        }
    
        const rebaseBinding = base.syncState(
          `${this.props.room.name}/messages`,
          {
            context: this,
            state: 'messages',
            asArray: true,
          }
        )
    
        this.setState({ rebaseBinding })
    }

    addMessage = (body, time) => {
        const messages = [...this.state.messages]
        messages.push({
            id: Date.now(), 
            user: this.props.user,
            time,
            body,
        })

        this.setState({messages}) 
    }

    addReaction = (message, emoji) => {
        message.reactions = message.reactions || {}
        message.reactions[emoji] = message.reactions[emoji] || []
    
        message.reactions[emoji].push(this.props.user)
    
        const messages = [...this.state.messages]
        const i = messages.findIndex(msg => msg.id === message.id)
        messages[i] = message
    
        this.setState({ messages })
      }

    render(){
        return(
            <div 
                className="Chat"
                style={styles.Chat}
            >
                <ChatHeader room={this.props.room} removeRoom={this.props.removeRoom}/>
                <MessageList 
                    messages={this.state.messages} 
                    room={this.props.room}
                    addReaction={this.addReaction}
                />    
                <MessageForm addMessage={this.addMessage}/>
            </div>
        )
    }
}

const styles = {
    Chat: {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
    }
}

export default Chat