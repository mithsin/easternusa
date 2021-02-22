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
import './styles.scss';

const Table = ({acctType}) => {
    const dispatch = useDispatch();
    const projectState = useSelector(projectStateSlice);
    const projectbkD = useSelector(projectBackEndDataStateSlice);

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

    const TableBodyLi = ({obj}) => {
        const bodyRender = [];
        for(const key in obj){
            bodyRender.push( 
                <span key={`${key}`}>
                    {
                        ((obj[key] === false || obj[key] === true) && 
                        (obj[key] === false 
                            ? "waiting"
                            : "completed")) ||
                        <span key={`${key}`}>{`${obj[key]}`}</span>
                    }
                </span>)
        }
    
        return <li>
            {bodyRender}
        </li>
    }

    const TableAdminBodyLi = ({obj}) => {
        const handleToggleBool = (iobj, ikey, ivalue) => {
            const updateObj = {...iobj, [ikey]: !ivalue};
            dispatch(setUpdateProject(projectbkD.map(item => (item.projectId === obj.projectId) ? updateObj : item)))
            dispatch(setUpdateprojectBackEndData(projectbkD.map(item => (item.projectId === obj.projectId) ? updateObj : item)))
        }

        const bodyRender = [];
        for(const key in obj){
            bodyRender.push( 
                <span key={`${key}`}>
                    {
                        ((obj[key] === false || obj[key] === true) && 
                        (obj[key] === false 
                            ? <button onClick={()=>handleToggleBool(obj, key, obj[key])}>waiting</button> 
                            : <button onClick={()=>handleToggleBool(obj, key, obj[key])}>completed</button>)) ||
                        <span key={`${key}`}>{`${obj[key]}`}</span>
                    }
                </span>)
        }
    
        return <li>
            {bodyRender}
        </li>
    }
    console.log('projectbkD--->: ', projectbkD)
    return (
        <ul className={`tableUl${acctType}`}>
            <TableHeader obj={projectbkD[0]} />
            { (acctType === "Client")
                ? projectbkD.map((list, index) => <TableBodyLi key={`li-${index}`} obj={list} />)
                : projectbkD.map((list, index) => <TableAdminBodyLi key={`li-${index}`} obj={list} />)
                
            }
        </ul>
    );
};

export default Table;