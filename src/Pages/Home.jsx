import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchBar from 'Components/Blocks/SearchBar';
import Table from 'Components/Blocks/Table';
import {
    isLoggedInSlice,
    isAdminPermissionSlice,
    isClientPermissionSlice,
} from 'States/userSlice';
import {
    projectSliceSearch,
    projectStateSlice
} from 'States/projectsSlice';

const Home = () => {
    const dispatch = useDispatch();
    const projectState = useSelector(projectStateSlice);
    const isLoggedIn = useSelector(isLoggedInSlice);
    const isAdminLoggedIn = useSelector(isAdminPermissionSlice);
    const isClientLoggedIn = useSelector(isClientPermissionSlice);
    const [projectData, setProjectData] = useState();
    // const [projectStateArray, setProjectStateArray] = useState(projectState);

    const handleSearchOnClick = (inputText) => {
        const searchResponse = dispatch(projectSliceSearch(inputText));
        if(searchResponse === undefined){
            setProjectData(<p>there is no match id</p>)
        } else {
            const resComponent =[];
            for(const key in searchResponse){
                resComponent.push(
                    <li key={key}>
                        <span>{`${key}: `}</span>
                        <span>{`${searchResponse[key]}`}</span>
                    </li>
                )
            }

            setProjectData(
                <ul>
                    {resComponent}
                </ul>
            )
        }

    }

    return(
        <div>
            <h2>WELCOME</h2>
            {
                !isLoggedIn && 
                    <>
                        <SearchBar onClick={handleSearchOnClick}/>
                        <h3>{projectData}</h3>
                    </>
            }
            {
                isClientLoggedIn && 
                    <>
                        <h2>Client table</h2>
                        <Table acctType="Client"/>
                    </>
            }
            {
                isAdminLoggedIn && 
                    <h2>
                        <h2>Admin table</h2>
                        <Table acctType="Admin"/>
                    </h2>
            }
        </div>
    )
}

export default Home;