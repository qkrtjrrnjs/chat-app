import React from 'react'

import Avatar from './Avatar'
import SignOut from './SignOut'

const Userinfo = ({ user, signOut }) => {
    return (
      <div
        className="UserInfo"
        style={styles.info}
      >
        <Avatar user={user} style={styles.avatar} />
        <div className="user" style={styles.user}>
          {user.displayName}
        </div>
        <SignOut signOut={signOut} />
      </div>
    )
}

export default Userinfo

const styles = {
    info: {
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
        padding: '0 1rem',
      },
    
      avatar: {
        marginRight: '0.5rem',
      },
    
      user: {
        flex: 1,
      },
}