import { makeStyles } from '@material-ui/core';

export const useProfileBlockStyles = makeStyles((theme) => ({
    bodyWrapper: {
      position: "fixed",
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#fff",
    },
    root: {
      maxWidth: "450px",
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      // border: '1px solid black'
    },
    listItem: {
      display: 'flex',
      justifyContent: 'center'
    },
    listItemImage: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      '& #dropbox': {
        width: '100%'
      }
    },
    listItemCopyLink: {
      justifyContent: 'space-between',
      '& input': {
        margin: '0px',
      },
      '& button' : {
        minWidth: '150px',
      }
    }
}));

export const useMenuBlockStyles = makeStyles((theme) => ({
  MenuWrapper: {
    height: "100vh",
    width: "40vw",
    minWidth: "450px",
    position: "fixed",
    top: 0,
    background: "#fff",
    boxShadow: "1px 1px 8px -1px #d3d3d3",
    zIndex: 9999,
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down('xs')]: {
      width: "100%",
      justifyContent: "center",
    },
  },
  MenuUl: {
    maxWidth: "450px",
    width: "100%",
    backgroundColor: "#FAFAFAE6",
    borderRadius: "6px",
    height: "calc(100% - 5rem)",
    overflow: "auto",
    margin: "16px",
    padding: "16px",
  },
  Title: {
    minWidth: "270px",
    width: "100%",
    fontSize: "2rem",
    fontWeight: "600",
  },
  ListText: {
    fontSize: "1.5rem"
  },
  menuList: {
    padding: "16px",
  },
  menuHeader: {
    marginBottom: "36px",
  }
}));