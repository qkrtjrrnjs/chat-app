import React from 'react'

const Sidebar = (props) => {
    
    return(
        <aside className="Sidebar">
            <div className="UserInfo">
                <div
                    className="Avatar"
                    style="background: url(https://api.adorable.io/avatars/32/davey@getfretless.com)"
                ></div>
                <div className="user">Davey</div>
                    <a href="#">
                        <i className="fas fa-sign-out-alt"></i>
                    </a>
                </div>
                <h1>XTBC 18</h1>
                <nav className="RoomList">
                    <h2>Rooms</h2>
                    <ul>
                        <li><a href="#">general</a></li>
                        <li><a href="#">random</a></li>
                    </ul>
                </nav>
        </aside>
    )    
    
}

const style = {
    sidebard: {

    },
    
    children: {

    },

    h1: {

    },
}

export default Sidebar