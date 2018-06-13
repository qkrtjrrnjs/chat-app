import React from 'react'

const Message = (props) => {

    return(
        <div className="Message" style={styles.Message}>
            <div className="Detail" style={styles.Details}>
                <span style={styles.UserName}>
                    {props.message.userName}
                </span>
                <span style={styles.Time}>
                    {props.message.time}
                </span><br/>
                {props.message.body}
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

    Time: {

    },
}


export default Message