import {createUseStyles} from 'react-jss'
import { makeStyles } from '@material-ui/core/styles';

export const useHeaderStyles = makeStyles((theme) => ({
    headerWrapper: {
      top: '0',
      left: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      height: '86px',
      // backgroundColor: '#fff',
      backgroundColor: 'rgba(255,255,255,.9)',
      color: '#333',
    },
    grow: {
      flexGrow: 1,
    },
    AppBar: {
      backgroundColor: "#ffffff00 !important",
      color: "#313131",
      boxShadow: 'none',
      position: 'relative'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    iconSize: {
      fontSize: 40
    },
    sectionDesktop: {
      // display: 'none',
      // [theme.breakpoints.up('md')]: {
        display: 'flex',
      // },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    loginBlock: {
      width: '100%',
      maxWidth: '500px', 
      position: 'absolute', 
      top: '0', 
      right: '0',
      zIndex: 9998,
    },
    mobileHide: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    closeIcon: {
      display: "flex",
      justifyContent: "flex-end"
    },
    orange: {
      color: "#FFF",
      backgroundColor: "#FFA500",
    },
    profileBlock: {
      width: "100%",
      border: "1px dotted gray",
      maxWidth: "300px",
      background: "#ffffff",
      padding: "0",
      position: "absolute",
      top: "88px",
      right: "16px",
      boxShadow: "0px 3px 6px 1px #bbb",
      // [theme.breakpoints.down('sm')]: {
      //   display: 'none',
      // },
      "& li": {
        padding: "20px",
        borderBottom: '1px solid #bbb',
      }
    },
    mobileProfileBlock: {
      width: "100%",
      border: "1px dotted gray",
      maxWidth: "299px",
      background: "#ffffff",
      padding: "0",
      position: "absolute",
      top: "0px",
      right: "0px",
      boxShadow: "0px 3px 6px 1px #bbb",
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
      "& li": {
        padding: "20px",
        borderBottom: '1px solid #bbb',
      }
    },
    mobileMenuBlock: {
      width: "100%",
      border: "1px dotted gray",
      maxWidth: "300px",
      background: "#ffffff",
      padding: "0",
      position: "absolute",
      top: "36px",
      right: "0px",
      boxShadow: "0px 3px 6px 1px #bbb",
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    notLoginBlock: {
      display: "flex"
    },
    shadow: {
      boxShadow:' 0 9px 9px -9px rgba(0, 0, 0, 0.13)',
      position: "fixed",
      top: '0',
      zIndex: 99999,
      transform: 'translateY(0)',
      transition: 'transform 0.6s ease',
    },
    hidden: {
      transform: 'translateY(-110%)',
      transition: 'transform 0.6s ease',
    },
  }));

export const homeStyles = createUseStyles({
    HomeOrderOnline: {
        position: 'fixed',
        right: '0px',
        top: '26px',
        zIndex: '99',
        fontWeight: '600',
        fontSize: '1.5rem',
        border: '1px dotted black',
        backgroundColor: '#fff',
        textDecoration: 'none',
        borderRadius: '6px',
        padding: '8px',
    },
    HomeOrderOnlineCartIcon: props => {
        return {
            position: 'fixed',
            right: '16px',
            top: '50px',
            zIndex: '99',
            fontWeight: '600',
            fontSize: '1.5rem',
            border: '1px dotted black',
            backgroundColor: '#ffffff33',
            textDecoration: 'none',
            borderRadius: '6px',
            padding: '8px',
            cursor: 'pointer',
            '& p': {
                position: 'absolute',
                top: '0',
                right: '0',
                margin: '0',
            },
            '& svg': {
                color: props.iconColor || '#000',
            }
        }
    },
    wrapper: {
        display: 'flex',
        flexBasis: '1440px',
        flexDirection: 'column',
    },
    CategoryWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        margin: '26px 0',
    },
    CategoryList: {
        maxWidth: '1280px',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        // gridTemplateColumns: 'repeat(auto-fill, minmax(7rem, 1fr))',
        margin: 'auto',
        gap: '.5rem'
    },
    MenuOutterWrap: {
        padding: '8px',
        margin: 'auto',
        border: '1px dotted',
        maxWidth: '1240px',
    },
    '@media only screen and (max-width: 599px)': {
        CategoryList: {
            maxWidth: '1280px',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            margin: 'auto',
            gap: '0',
        },
    },
});