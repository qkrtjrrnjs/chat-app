import React, {Component} from 'react'

class RoomForm extends Component{
    state = {
        room: {
            name: '',
            description: '',
        }
    }

    handleChange = (ev) =>{
        const change = [...this.state.room]
        change[ev.target.name] = ev.target.value
        this.setState(change)
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.addRoom(this.state.room)
    }

    render(){
        return(
            <div className="RoomForm">
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="name">Room name</label>
                        <input type="text" name="name" value={this.state.room.name} autoFocus onChange={this.handleChange}/>
                    </p>
                    <p>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" value={this.state.room.description} onChange={this.handleChange}/>
                    </p>
                    <div>
                        <button type="button" onClick={this.props.hideFormRoom}>cancel</button>
                        <button type="submit">create room</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default RoomForm