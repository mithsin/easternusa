import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Button,
  ListItem,
  List 
} from '@material-ui/core';
import { useProfileBlockStyles } from './styles';
import CloseBar from 'Components/Utils/CloseBar';



const ProfileBlock = ({setCloseUpdate}) => {
  const dispatch = useDispatch();
  const classes = useProfileBlockStyles();
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
    <div className={classes.bodyWrapper}>
      <List className={classes.root}>
        <ListItem>
          <span>Settings</span> 
          <CloseBar setClose={setCloseUpdate}/>
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
    </div>
  );
}

export default ProfileBlock;