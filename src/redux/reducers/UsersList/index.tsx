import {createSlice,createAsyncThunk, AsyncThunk} from '@reduxjs/toolkit';
import  Axios  from 'axios';

interface initState {
  userData: {
  loading: boolean;
  data: any[],
  error: object
  }
}

const initialState: initState = {
  userData: {
  loading: true,
  data: [],
  error: {}
}};

const BASE_URL = 'https://randomuser.me/api/';

const callAPI = async ({url}:{url:string}) => {
  return await Axios({
    url,
  });
};

const fetchUserData: AsyncThunk<any, number, {}> = createAsyncThunk(
  'userlist',
  async (page: number) => {
    try {
      const res = await callAPI({url: `${BASE_URL}?results=20&page=${page}`})
      const data = res?.data?.results;
      return data;
    } catch (error) {
      return error
    }
  },
);

const usersList = createSlice({
  name: 'usersList',
  initialState,
  reducers: {

  },
  extraReducers: {
    [fetchUserData.pending.type]: (state) => {
      state.userData = {
        loading: true,
        data: [...state.userData.data],
        error: {},
      };
    },
    [fetchUserData.fulfilled.type]: (state, action) => {
      state.userData = {
        loading: false,
        data: [...state.userData.data, ...action.payload],
        error: {},
      };
    },
    [fetchUserData.rejected.type]: (state, action) => {
      state.userData = {
        loading: false,
        data: [...state.userData.data],
        error: action.payload,
      };
    },
  },
});

export {fetchUserData};
export default usersList.reducer;
