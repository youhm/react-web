/*
 * @Description: description
 * @version: 0.1
 * @Author: youhuimin
 * @Date: 2022-03-04 15:44:03
 * @LastEditors: youhuimin
 * @LastEditTime: 2022-03-14 10:40:22
 * @FilePath: \react\my-app\src\App.js
 */
import "./App.css";
import React from 'react'
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import About from "./pages/About";
import Inbox from "./pages/Inbox";
import Message from "./pages/Message";

function Dashboard(){
  return <div>Welcome to the app!</div>
}
function Index(props){
  return (
    <div>
      <h1>App</h1>
      <ul style={{textAlign:'left'}}>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/inbox">Inbox</Link></li>
      </ul>
      <Outlet />
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Index/>}>
          {/* 当 url 为/时渲染 Dashboard */}
          <Route path="/" element={<Dashboard/>}></Route>
          {/* <IndexRoute element={Dashboard} /> */}
          <Route path="about" element={<About/>} />
          <Route path="inbox" element={<Inbox/>}>
            <Route path="messages/:id" element={<Message/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
