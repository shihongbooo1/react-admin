import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import { Layout } from 'antd';
import Home from '../home';
import Music from '../music';
import Tools from '../tools';
import Editor from '../editor';
import Album from '../album';
import TodoList from '../todoList';
import './content.scss'
const { Content } = Layout;

class Contents extends Component {
  render() {
    return (
      <Content className="content">
         <Route exact path="/index" component={Home}></Route> 
         <Route path="/index/music" component={Music}></Route>
         <Route path="/index/tools" component={Tools}></Route>
         <Route path="/index/editor" component={Editor}></Route>
         <Route path="/index/album" component={Album}></Route>
         <Route path="/index/todoList" component={TodoList} />
      </Content>
    );
  }
}

export default Contents;
