import React, { useState } from 'react';
import {
    MuiInputField
} from 'Components/MUI';
import {
    SubmitButton
} from 'Components/MUI/ButtonTypes';

const SearchBar = ({onClick}) => {
    const [formInput, setFormInput] = useState('');
    return(
        <div>
            <MuiInputField
                defaultValue={"project-"}
                name="projectId" 
                label="projectId"
                onChange={(e)=> setFormInput(e.target.value)}   
            />
            <SubmitButton 
                onClick={()=> onClick(formInput)}
            />
        </div>
    )
}

export default SearchBar;