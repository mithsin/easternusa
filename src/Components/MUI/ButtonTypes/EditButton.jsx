import React from "react";
import { MuiButton } from "Components/MUI";

const EditButton = ({onClick, label=null}) => {
    return (
        <MuiButton
            label={label ? label : "CANCEL"}
            props={{
                color: "black",
                bgColor: "#00b300",
                boxShadow: "2px 2px 23px rgba(0, 0, 0, 0.2) inset",
                hColor: "white",
                hbgColor: "#DC143C"
            }}
            onClick={onClick} />
    )
}

export default EditButton;