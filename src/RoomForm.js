import React, {Component} from 'react'

class RoomForm extends Component{
    state = {
        name: '',
        description: '',
    }

    handleChange = (ev) =>{
        const change = []
        change[ev.target.name] = ev.target.value
        this.setState(change)
    }

    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.addRoom({
            name: this.state.name,
            description: this.state.description,
        })
    }

    render(){
        return(
            <div className="RoomForm">
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor="name">Room name</label>
                        <input type="text" name="name" value={this.state.name} autoFocus onChange={this.handleChange}/>
                    </p>
                    <p>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
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