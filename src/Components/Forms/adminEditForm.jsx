import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MuiInputField } from 'Components/MUI';
import { EditButton } from 'Components/MUI/MuiComponents/MuiBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from '@material-ui/core/Modal';
import './styles.scss';

const AddCategory = ({objData, open, handleToggle}) => {

    const formInputChange = (e) => {
        if(e.target.name === 'points' && (/[^\d]/g).test(e.target.value)){
            setInputError(true)
        } else {
            setInputError(false)
            setFormInputs({ 
                ...formInputs,
                [e.target.name] :  e.target.value
            })
        }
    };


    const inputSettings = [{
            type: "text",
            name: "title",
            placeholder: "title"
        },{
            type: "text",
            name: "descriptions",
            placeholder: "descriptions"
    }];


    return(
        <Modal
            open={open}
            onClose={handleToggle}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            style={{
                overflow: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
            }}>
            <div className="AddMenuItem-Wrapper">
                <div className="inner-block">
                    <div className="form-container" >
                        <div className="Item-Details-Close">
                            <FontAwesomeIcon onClick={handleToggle} icon={faTimes} style={{margin: '1rem', cursor: 'pointer'}} className="fa-2x"/>
                        </div>
                        {
                            inputSettings.map((inputSetting, index)=>
                                <MuiInputField
                                    key={`${index}-inputsetting`}
                                    {...inputSetting}
                                    bgColor="#fff"
                                    name={inputSetting.name}
                                    label={inputSetting.placeholder}
                                    onChange={ formInputChange }/>
                            )
                        }
                        <EditButton 
                            label="ADD"
                            onClick={ handleSubmitEdit }/>
                    </div>
                </div>
            </div>
        </Modal>
    )
};

export default AddCategory;