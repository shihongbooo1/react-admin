import React, { Component } from 'react';
import { Menu, Icon,Layout} from 'antd';
import { BrowserRouter as Router, Route,Link } from "react-router-dom";
import './top.scss'
const { Header } = Layout;

const SubMenu = Menu.SubMenu;

class Top extends Component {
  constructor(props){
    super(props);
    this.state = {
        current: 'mail',
        username:localStorage.getItem("name") || "",
    }
  }
 
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  goBack= (e) => {
    localStorage.removeItem('name');  //清除localStorage
    this.props.history.push('/login');  //页面跳转
  }
  render() {
    return (
      <Header style={{ background: '#fff'}}>
          <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.props.toggle}
            />
        <Menu className="logOut"
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <SubMenu title={<span><Icon type="setting" />{this.state.username}</span>}>
          <Menu.Item key="setting:1"><a onClick={this.goBack}>退出</a></Menu.Item>
          </SubMenu>
          
        </Menu>
      </Header>
    );
  }
}

export default Top;
