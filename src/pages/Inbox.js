/*
 * @Description: description
 * @version: 0.1
 * @Author: youhuimin
 * @Date: 2022-03-11 16:33:32
 * @LastEditors: youhuimin
 * @LastEditTime: 2022-03-11 17:07:18
 * @FilePath: \react\my-app\src\pages\Inbox.js
 */
import React from "react"
class Inbox extends React.Component{
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
}

export default Inbox