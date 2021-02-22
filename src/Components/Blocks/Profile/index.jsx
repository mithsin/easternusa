import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MuiButton, MuiInputField } from 'Components/MUI';
import {
  Button,
  ListItemText,
  ListItem,
  List,
  makeStyles } from '@material-ui/core';
import ImageUpload from 'Components/ImageUpload/ImageUpload';
import CloseBar from 'Components/Utils/CloseBar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid black'
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

const Profile = ({setCloseUpdate}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [profileImageURL, setProfileImageURL] = useState('');
  const [paramInput, setParamInput] = useState({});
  useEffect(()=>{
    setParamInput({
          ...paramInput,
          profileImageURL: profileImageURL,
      })
  },[profileImageURL]);

  const onClickUpdateProfile = () => {
      console.log('update');
  };

  return (
    <List className={classes.root}>
      <ListItem>
        <span>Settings</span> 
        <CloseBar setClose={setCloseUpdate}/>
      </ListItem>
      <ListItem className={classes.listItemImage}>
        <ListItemText id="profile-image-change" primary="Update Profile Image" />
        <ImageUpload setImageURL={setProfileImageURL}/>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button 
          variant="contained"
          color="primary"
          onClick={onClickUpdateProfile}
          onKeyPress={onClickUpdateProfile}
        >
            Update
        </Button>
      </ListItem>
    </List>
  );
}

export default Profile;