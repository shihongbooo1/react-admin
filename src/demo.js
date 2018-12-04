import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Prompt,Redirect } from "react-router-dom";
import './App.css'; 
import { Button,Alert } from 'antd';
import 'antd/dist/antd.css';
import App from './App';

class New extends Component {
    render() {
      return (
        <div>
            <div>新闻</div>
            <h1>id:{this.props.match.params.id}{this.props.match.url}</h1>
        </div>
          )
    }
}
class Info extends Component {
    render() {
      return (
        <div>
            <div>详情页</div>
            <h1>id:{this.props.match.url}</h1>
        </div>
          )
    }
}
class Demo extends Component {
  constructor(){
    super();
    this.state={
      id:100
    }
  }
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/home">首页</Link></li>
            <li><Link to={"/new/"+this.state.id}>新闻</Link></li>
            <li><Link to="/info/20">详情页</Link></li>
          </ul>
          <Route path="/home" component={App}></Route>
          <Route path="/new/:id" component={New}></Route>
          <Route path="/info/:type" component={Info}></Route>
        </div>
      </Router>
      
    );
  }
}

export default Demo;
