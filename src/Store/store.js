import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from 'States/userSlice';
import projectsReducer from 'States/projectsSlice';

export default configureStore({
    reducer: {
        projectsState: projectsReducer,
        userState: userReducer,
        middleware: [ ...getDefaultMiddleware({
            serializableCheck: false
        })],
    },
});