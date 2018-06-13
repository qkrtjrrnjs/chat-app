import React from 'react'

const Metadata = ({message}) => {
    return(
        <div className="Metadata" style={styles.data}>
            <div style={styles.user}>{message.user.userName}</div>
            <div style={styles.time}>{message.time}</div>
        </div>
    )
}

const styles = {
    data: {
      display: 'flex',
      alignItems: 'baseline',
    },
  
    user: {
      fontWeight: 'bold',
      marginRight: '0.5rem',
    },
  
    time: {
      color: '#777777',
      fontSize: '0.8rem',
    }
}

export default Metadata