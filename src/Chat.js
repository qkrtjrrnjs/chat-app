import React, {Component} from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component{
    constructor(){
        super()
        this.state = {
            messages: [
                { id: 1, userName: 'chris', body: 'Hello World!'},
                { id: 2, userName: 'James', body: 'Hello Chris!'},
            ],
        }
    }


    addMessage = (body) => {
        const messages = [...this.state.messages]
        messages.push({
            id: Date.now(), 
            userName: this.props.user.userName,
            body: body,
        })

        this.setState({messages}) 
    }

    render(){
        return(
            <div 
                className="Chat"
                style={styles.Chat}
            >
                <ChatHeader />
                <MessageList messages={this.state.messages} />
                <MessageForm addMessage={this.addMessage} />
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