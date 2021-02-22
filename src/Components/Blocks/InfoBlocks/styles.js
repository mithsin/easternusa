import {createUseStyles} from 'react-jss'

export const SubjectInfoBlockStyle = createUseStyles({
    Wrapper: props => ({
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
    }),
    InfoBlock: props => ({
        fontSize: '2rem',
    }),
    subjectBlock: props => ({
        fontSize: '.9rem',
    })
});