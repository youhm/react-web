/*
 * @Description: description
 * @version: 0.1
 * @Author: youhuimin
 * @Date: 2022-03-15 18:16:20
 * @LastEditors: youhuimin
 * @LastEditTime: 2022-03-16 18:34:37
 * @FilePath: \react\my-app\src\store\reducers\index.js
 */
import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './user'
export const rootReducer = combineReducers({ user: userReducer });
