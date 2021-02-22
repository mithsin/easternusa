import React, {useState} from 'react';
import './styles.scss';

const Table = ({arrayData, acctType, setArrayData}) => {

    console.log('arrayData--->: ', arrayData)
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
            setArrayData(arrayData.map(item => (item.projectId === obj.projectId) ? updateObj : item))
            
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

    return (
        <ul className={`tableUl${acctType}`}>
            <TableHeader obj={arrayData[0]} />
            { (acctType === "Client")
                ? arrayData.map((list, index) => <TableBodyLi key={`li-${index}`} obj={list} />)
                : arrayData.map((list, index) => <TableAdminBodyLi key={`li-${index}`} obj={list} />)
                
            }
        </ul>
    );
};

export default Table;