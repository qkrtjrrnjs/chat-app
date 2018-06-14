import React, {Component} from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'
import Main from './Main'

import base from './base'

class Chat extends Component{
    constructor(){
        super()
        this.state = {
            messages: [
            ],
            rebaseBinding: null
        }
    }

    componentWillMount(){
        this.syncMessages()
    }

    componentDidUpdate(prevProps){
        if(prevProps.room.name !== this.props.room.name){
            this.syncMessages()
        }
    }

    syncMessages = () =>{
        if(this.state.rebaseBinding){
            base.removeBinding(this.state.rebaseBinding)
        }
        const rebaseBinding = base.syncState(`${this.props.room.name}/messages`, {
            context: this, 
            state: 'messages',
            asArray: true,
        })

        this.setState({rebaseBinding})
    }

    addMessage = (body, time) => {
        const messages = [...this.state.messages]
        messages.push({
            id: Date.now(), 
            user: this.props.user,
            time: time,
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
                <ChatHeader room={this.props.room}/>
                <MessageList messages={this.state.messages} room={this.props.room}/>
                <MessageForm addMessage={this.addMessage} />
                <Main channel={this.state.channel} />
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