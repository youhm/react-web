/*
 * @Description: description
 * @version: 0.1
 * @Author: youhuimin
 * @Date: 2022-03-11 16:36:35
 * @LastEditors: youhuimin
 * @LastEditTime: 2022-03-11 17:08:15
 * @FilePath: \react\my-app\src\pages\Message.js
 */
import React from "react";
class Message extends React.Component {
  render() {
    return <h3>Message {this.props.params.id}</h3>;
  }
}
export default Message;
