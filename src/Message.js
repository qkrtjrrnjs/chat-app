import React from 'react'

import Avatar from './Avatar'
import Metadata from './Metadata'

const Message = ({message}) => {

    return(
        <div className="Message" style={styles.Message}>
            <Avatar user={message.user} />
            <div className="Detail" style={styles.Details}>
                <Metadata message={message} />
                <div className="body">
                    {message.body}
                </div>
            </div>
        </div>
    )
}

const styles = {
    Message: {
        display: 'flex',
        marginTop: '1rem',
        padding: '0 1rem',
        overflowWrap: 'break-word',
    },
      
    Details: {
        flex: '1',
        paddingLeft: '0.5rem',
    },

    UserName: {
        fontWeight: 'bold',
        fontSize: '1.1rem',
    },
}


export default Message