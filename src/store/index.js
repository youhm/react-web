/*
 * @Description: description
 * @version: 0.1
 * @Author: youhuimin
 * @Date: 2022-03-15 16:07:49
 * @LastEditors: youhuimin
 * @LastEditTime: 2022-03-17 09:50:12
 * @FilePath: \react\my-app\src\store\index.js
 */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {rootReducer} from './reducers'

export const store = configureStore({
  reducer: rootReducer
});
