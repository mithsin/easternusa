import { createSlice } from '@reduxjs/toolkit';
import { projectOne } from 'mockConstant/mockProjectData';

const initState = {
    projects: [],
}

export const projectsSlice = createSlice({
    name: 'projectsState',
    initialState: initState,
    reducers: {
        setprojectsState: (state, action) => {
            return {...state, ...action.payload};
        },
        setUpdateProject: (state, action) => {
            state.projects = action.payload;
        },
    },
});

export const {
    setprojectsState,
    setUpdateProject
} = projectsSlice.actions;

export const projectSliceSearch = (idNumber) => (dispatch, getState) => {
    // const projectsState = getState().projectsState.projects;
    const foundByprojectId = projectOne.find(project =>project.projectId === idNumber);

    return foundByprojectId
}

export const projectStateSlice = state => state.projectsState.projects;
export default projectsSlice.reducer;
