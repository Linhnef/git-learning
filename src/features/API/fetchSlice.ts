    import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { async } from 'q';
import * as React from 'react';
import {UseFetch,productProps} from 'app/hooks';
import axios from 'axios';
import { fetchDataState } from './types';



const initialDataFetch : fetchDataState = {
    error : null,
    loading : false,
    data: []
}

const header = {
    method: 'get',
    url: 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1',
}

export const fetchDataList = createAsyncThunk(
    'data/loadingData',
    async () => axios.get('http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1')
                        .then(rs => rs.data)
                        .catch(error => error)
    /* async () => UseFetch(header).data */
)

export const fecthDataSlice = createSlice({
    name:'fetch',
    initialState: initialDataFetch,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchDataList.fulfilled, (state, action) => {
          state.data = action.payload;
          state.error= null;
          state.loading = false;
        })
        builder.addCase(fetchDataList.pending, (state) => {
            state.data = [];
            state.error = null;
            state.loading = true;
          })
        builder.addCase(fetchDataList.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.name + ' : ' + action.error.message;
          state.data = [];
        })
      },
})


