import React, {Component} from 'react'

class MessageForm extends Component{

    state = {
        body: '',
    }

    time = new Date()

    handleSubmit = (ev) => {
        ev.preventDefault()
        if(this.state.body === ''){
            //Do nothing
        }else{
            this.props.addMessage(this.state.body)
        }
        this.setState({
            body: ''
        })
    }

    handleChange = (ev) => {
        this.setState({body: ev.target.value})    
    }

    render(){
        return(
            <form 
                className="MessageForm"
                onSubmit={this.handleSubmit}
                style={styles.MessageForm}
            >
                <input 
                    type="text" 
                    name="body" 
                    placeholder="Message" 
                    value={this.state.body}
                    onChange={this.handleChange}
                    style={styles.Input}
                />
                <button type="submit" style={styles.Button}></button>
            </form>
        )
    }
}

const styles = {
    MessageForm: {
        height: '2.3rem',
        display: 'flex',
        alignItems: 'stretch',
        border: '2px solid #999',
        borderRadius: '0.35rem',
        margin: '1rem',
        padding: '0',
        borderColor: 'black',
      },
      
     /*.MessageForm .chatIcon*/
     ChatIcon: {
        display: 'flex',
        borderRadius: '0.5rem',
        alignItems: 'center',
        backgroundColor: 'white',
        color: '#ccc', 
        padding: '0 0.5rem',
        fontSize: '1.2rem',
      },

      /*MessageForm input*/
      Input: {
        flex: '1',
        fontSize: '1.2rem',
        border: '0',
      },

      /*
      .MessageForm input:focus {
        outline: 0;
      },
      */
      
      /*.MessageForm button*/
       Button: {
        fontSize: '1.5rem',
        backgroundColor: 'none',
        color: 'white',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderTopRightRadius: '0.5rem',
        borderBottomRightRadius: '0.5rem',
        border: '1px solid white',
      },
}

export default MessageForm