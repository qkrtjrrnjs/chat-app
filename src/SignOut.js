import React from 'react'
import { StyleSheet, css } from 'aphrodite';

const SignOut = ({signOut}) => {
    return (
        <button className={css(styles.button)} onClick={signOut}>
            <i className="fas fa-sign-out-alt"></i>
        </button>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
        border: '0',
        padding: '0',
        color: '#eeeeee',
        fontSize: '1.2rem',
        transition: 'color 0.25s ease-out',

        ':hover': {
            color: 'white',
        }
    }
})

export default SignOut

