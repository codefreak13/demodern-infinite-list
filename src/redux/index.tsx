import {configureStore} from '@reduxjs/toolkit';
import { usersSlice} from './reducers';
import thunkMiddleware from 'redux-thunk';

const store = configureStore({
  reducer: {
    usersList: usersSlice
  },
  middleware:[thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;