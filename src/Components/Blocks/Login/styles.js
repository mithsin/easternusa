import {createUseStyles} from 'react-jss'

export const signUpStyles = createUseStyles({
    loginBlockWrapper: {
        width: '100%',
        maxWidth: '500px',
        border: '1px dotted gray',
        background: '#ffffff',
    },
    loginBlockInnerWrap: {
        margin: '16px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
    },
    closeIcon: {
        position: 'absolute',
        top: '24px',
        right: '16px',
    },
    signUpFormWrapper: {
        display: 'flex',
        flexDirection: 'column',
    },
    routeLinkWrapper: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    signUp: {
        color: '#3f51b5',
        padding: '6px',
        borderRadius: '6px',
        border: '3px solid #3f51b5;',
        '&:hover': {
            color: '#fff',
            backgroundColor: '#3f51b5',
            border: '0px',
            padding: '9px',
        }
    }
});