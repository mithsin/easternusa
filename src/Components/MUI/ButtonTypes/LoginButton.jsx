import React from "react";
import { MuiButton } from "Components/MUI";

const LoginButton = ({disabled, onClick}) => {
    return (
        <MuiButton 
            label="LOGIN"
            variant="outlined"
            props={{
                color: "3f51b5",
                boxShadow: "2px 2px 23px rgba(0, 0, 0, 0.2) inset",
                hColor: "white",
                hbgColor: "#6495ED"
            }}
            { ...disabled && {disabled: disabled}}
            onClick={onClick} />
    )
}

export default LoginButton;