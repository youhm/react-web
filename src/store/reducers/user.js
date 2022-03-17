/*
 * @Description: description
 * @version: 0.1
 * @Author: youhuimin
 * @Date: 2022-03-15 18:17:24
 * @LastEditors: youhuimin
 * @LastEditTime: 2022-03-17 09:49:33
 * @FilePath: \react\my-app\src\store\reducers\user.js
 */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "@/axios/axiosConfig";
import $urlApi from '@/axios/requestList'
const initialState = {
  userInfo:{},
};
const namespaces = 'user'
// 异步获取用户信息

const fetchUserInfo = createAsyncThunk(
  `${namespaces}/fetchUserInfo`,
  async (account, thunkAPI) => {
    const response = await axios.get($urlApi.selectAccountByAccount, {
      params: {
        account: account,
      },
    })
    return response.data
  }
)
  
  // await generatorDynamicRouter();
  // app.$router.replace({ path: "/home"});
  // await axios.get($urlApi.selectAccountByAccount, {
  //   params: {
  //     account: localStorage.getItem("userPhone"),
  //   },
  // }).then((data) => {
  //   state.userInfo = payload.data;
  //   localStorage.setItem("ACCESS_ROLE", payload.data.roleList[0] && data.data.roleList[0].roleCode);
  //   localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
  // });
  // if(isReload){
  //     window.location.reload();
  // }
const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    loginSuccess(state,{payload}){
      localStorage.setItem("ACCESS_TOKEN", payload.data.sessionId);
      localStorage.setItem("accountId", payload.data.terminalAccountUser.id);
      localStorage.setItem("userPhone", payload.data.terminalAccountUser.mobile);
      localStorage.setItem("refreshToken", payload.data.refreshToken);
      // context.dispatch('GetInfo')
      // state.userSession = {}

    },
  },
  extraReducers:{
    [fetchUserInfo.fulfilled]: (state, action) => {
      // Add user to the state array
      state.userInfo = action.payload
    }
  }
});

export default user.reducer