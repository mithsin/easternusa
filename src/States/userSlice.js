import { createSlice } from '@reduxjs/toolkit';
import { projectOne } from 'mockConstant/mockProjectData';
import { setUpdateProject, setUpdateprojectBackEndData } from 'States/projectsSlice';

const initState = {
    isLoggedIn: false,
    isAdminPermission: false,
    isClientPermission: false
}

export const userSlice = createSlice({
    name: 'userState',
    initialState: initState,
    reducers: {
        setUserState: (state, action) => {
            return {...state, ...action.payload};
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setIsAdminPermission: (state, action) => {
            state.isAdminPermission = action.payload;
        },
        seClientserPermission: (state, action) => {
            state.isClientPermission = action.payload;
        },
    },
});

export const {
    setUserState,
    setIsLoggedIn,
    setIsAdminPermission,
    seClientserPermission
} = userSlice.actions;

export const userLogin = ({eMail, password}) => (dispatch, getState) => {
    const projectsState = getState().projectsState.projectBackEndData;
    if(eMail.toLowerCase() === "admin@admin.com"){
        dispatch(setUserState({
            isLoggedIn: true,
            isAdminPermission: true,
            isClientPermission: false,
        }))
        dispatch(setUpdateProject(projectOne))
        dispatch(setUpdateprojectBackEndData(projectsState))
    }
    if(eMail.toLowerCase() === "client@client.com"){
        dispatch(setUserState({
            isLoggedIn: true,
            isAdminPermission: false,
            isClientPermission: true,
            client: {
                clientId: 'client-1234'
            }
        }))
        dispatch(setUpdateProject(projectsState.filter(project => project.clientId === 'client-1234')))
    }
};

export const userLogout = ({history}) => dispatch => {
    dispatch(setUserState({
        isLoggedIn: false,
        isAdminPermission: false,
        isClientPermission: false,
    }))
    dispatch(setUpdateProject([]))
    history.push('/');

};

export const userLoginCheck = () => (dispatch, getState) => {

};

export const userStateSlice = state => state.userState;
export const isLoggedInSlice = state => state.userState.isLoggedIn;
export const isAdminPermissionSlice = state => state.userState.isAdminPermission;
export const isClientPermissionSlice = state => state.userState.isClientPermission;
export default userSlice.reducer;
