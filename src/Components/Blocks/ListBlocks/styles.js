import { createUseStyles } from 'react-jss'
import { makeStyles } from '@material-ui/core/styles';
import { WrapText } from '@material-ui/icons';

export const ListBlockDetailStyle = createUseStyles({
    ListWrapper: {
        display: 'flex',
        flexDirection: 'column',
        '& h2': {
            margin: '0px',
        }
    },
    ImgWrapper: {
        display: 'flex',
        flexDirection: props => props.flip ? 'row' : 'row-reverse',
        flexWrap: 'wrap',
        '@media screen and (max-width: 700px)' : {
            flexDirection: props => props.flip ? 'column' : 'column-reverse',
        },
    },
    FourImgs: {
        flex: '50%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        // '& span': {
        //     justifySelf: 'center',
        //     alignSelf: 'center',
        //     width: '95%',
        //     '& img': {
        //         width: '100%',
        //     }
        // },
    },
    OneImg: {
        alignSelf: 'start',
        justifySelf: 'center',
        width: '95%',
        '& img': {
            width: '100%',
        }
    },
    TwoImg: {
        alignSelf: 'start',
        justifySelf: 'center',
        width: '95%',
        '& img': {
            width: '100%',
        }
    },
    ThreeImg: {
        alignSelf: 'end',
        justifySelf: 'center',
        width: '95%',
        display: 'flex',
        '& img': {
            width: '100%',
        }
    },
    FourImg: {
        alignSelf: 'end',
        justifySelf: 'center',
        width: '95%',
        display: 'flex',
        '& img': {
            width: '100%',
        }
    },
    LargeImg: {
        display: 'flex',
        flex: '50%',
        '& img': {
            width: '100%',
        },
        '@media screen and (max-width: 700px)' : {
            margin: '16px 8px',
        },
    },
});
