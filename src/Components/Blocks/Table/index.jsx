import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    isLoggedInSlice,
    isAdminPermissionSlice,
    isClientPermissionSlice,
} from 'States/userSlice';
import {
    projectBackEndDataStateSlice,
    setUpdateprojectBackEndData,
    setUpdateProject,
    projectSliceSearch,
    projectStateSlice
} from 'States/projectsSlice';
import { MuiInputField } from 'Components/MUI';
import { SubmitButton } from 'Components/MUI/ButtonTypes';
import moment from 'moment';

import './styles.scss';

const Table = ({acctType}) => {
    const dispatch = useDispatch();
    const projectState = useSelector(projectStateSlice);
    const projectbkD = useSelector(projectBackEndDataStateSlice);
    const [openBox, setOpenBox] = useState(-1)

    // console.log('projectState--->: ', projectState)
    const TableHeader = ({obj}) => {
        const headerRender = [];
      
        for(const key in obj){
            headerRender.push( <span key={`${key}-0`}>{`${key}`}</span>)
        }

        return <li>
            {headerRender}
        </li>
    };

    const TableBodyLi = ({obj, objIndex}) => {
        const bodyRender = [];
        for(const key in obj){
            bodyRender.push( 
                <span key={`${key}`} style={{marginBottom: '50px'}}>
                    {
                        ((obj[key] === false || obj[key] === true) && 
                        (obj[key] === false 
                            ? "waiting"
                            : "completed")) ||
                        ((key === "comments") && 
                        <InputMessage dataRef={objIndex} initObj={obj}/>) ||
                    <span key={`${key}`}>{`${obj[key]}`}</span>
                    }
                </span>)
        }
    
        return <li>
            {bodyRender}
        </li>
    }

    const handleMessageBox=(openNumber)=>{
        setOpenBox(openBox === openNumber ? -1 : openNumber)
    };

    const InputMessage = ({initObj, dataRef}) => {
        const MessageBox = () => {
            const [onInputChange, setOnInputChange] = useState('')
            const handleSubmitMessage = () => {
                const messageObj = {
                    time: moment().format('MM/Do/YY'),
                    message: onInputChange
                } 

                const objectUpdated = {   
                    ...initObj,
                    comments: initObj.comments.concat(messageObj)
                }

                dispatch(setUpdateprojectBackEndData(projectState.map(item => 
                    (item.projectId === objectUpdated.projectId)
                        ? objectUpdated
                        : item
                )))
                dispatch(setUpdateProject(projectbkD.map(item => 
                    (item.projectId === objectUpdated.projectId)
                        ? objectUpdated
                        : item
                )))
                setOpenBox(-1)
            };
            const handleFormInput = e => {
                setOnInputChange(e.target.value)
            };
            const handleKeyPress = event => {
                if(event.key === 'Enter'){
                    setOpenBox(-1)
                    handleSubmitMessage();
                }
            }
            return (
                <div 
                    style={{position: 'absolute', top: '0', left: '0'}}>
                        message box
                        <MuiInputField 
                            onKeyPress={handleKeyPress}
                            onChange={handleFormInput}/>
                        <SubmitButton
                            label="SUBMIT"
                            onClick={handleSubmitMessage}
                        />
                </div>)
        }

        const DisplayMessage = ({time, message}) => (
            <div>
                <span>{`${time }: `}</span>
                <span>{message}</span>
            </div>
        )

        return(
            <div data-ref={dataRef} style={{position: 'relative', minHeight: '100px', border: '1px solid black', width: "200px", display: "flex", flexDirection: "column"}}>
                    
                {
                    (openBox !== dataRef)
                        ? <>
                            {((Array.isArray(initObj.comments)) && (initObj?.comments?.length > 0)) 
                                ? <span>{
                                    initObj?.comments.map((msg, idx)=> 
                                        <DisplayMessage 
                                            key={`${idx}-msg`} 
                                            time={msg.time} 
                                            message={msg.message}/>
                                    )}</span>
                                : <span>no message</span>}
                            <button style={{marginTop: "auto"}} data-num={dataRef} onClick={()=>handleMessageBox(dataRef)}>Add message</button>
                          </>
                        : <MessageBox />
                }
                
            </div>
        )
    }

    const TableAdminBodyLi = ({obj, objIndex}) => {
        const handleToggleBool = (iobj, ikey, ivalue) => {
            const updateObj = {...iobj, [ikey]: !ivalue};
            dispatch(setUpdateProject(projectbkD.map(item => (item.projectId === obj.projectId) ? updateObj : item)))
            dispatch(setUpdateprojectBackEndData(projectbkD.map(item => (item.projectId === obj.projectId) ? updateObj : item)))
        }

        const bodyRender = [];
        for(const key in obj){
            bodyRender.push( 
                <span key={`${key}`} style={{marginBottom: '50px'}}>
                    {
                        ((obj[key] === false || obj[key] === true) && 
                        (obj[key] === false 
                            ? <button onClick={()=>handleToggleBool(obj, key, obj[key])}>waiting</button> 
                            : <button onClick={()=>handleToggleBool(obj, key, obj[key])}>completed</button>)) ||
                        ((key === "comments") && 
                            <InputMessage dataRef={objIndex} initObj={obj}/>) ||
                        <span key={`${key}`}>{`${obj[key]}`}</span>
                    }
                </span>)
        }
    
        return <li>
            {bodyRender}
        </li>
    }
    return (
        <ul className={`tableUl${acctType}`}>
            <TableHeader obj={projectbkD[0]} />
            { (acctType === "Client")
                ? projectState.map((list, index) => (list.clientId === "client-1234") && <TableBodyLi key={`li-${index}`} objIndex={index} obj={list} />)
                : projectbkD.map((list, index) => <TableAdminBodyLi key={`li-${index}`} objIndex={index} obj={list} />)
                
            }
        </ul>
    );
};

export default Table;