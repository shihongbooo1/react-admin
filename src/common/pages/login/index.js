import React, { Component } from 'react';
//import 'antd/dist/antd.css';
import {withRouter} from "react-router-dom";
import { Form, Input, Button,notification} from 'antd';
import './index.scss'

const FormItem = Form.Item;

class Login extends Component {
    handleSubmit = (e) => {
      e.preventDefault();
      let name= this.props.form.getFieldsValue().username;    //$('.a').val()
      let psd= this.props.form.getFieldsValue().password;
      if(name == '123'&& psd=='123') {
        //alert('ok')
        //this.props.history.goBack();  //返回
        localStorage.setItem('name',name);   //存储localStorag
        this.props.history.push('/index');   //跳转到指定的路由
        //跳转主页面
      }else {
        //alert('error')
        //提示
        this.openNotification();
      }
    }
    openNotification(){
      return notification.open({
        message: '用户名和密码',
        description: '123',
      });
    };
    render() {
    const { getFieldDecorator } = this.props.form; 

    return (
      <div className="loginpagewrap">
                <div className="box">
                    <p>Welcome to the React</p>
                    <div className="loginWrap">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
                        </Form>
                    </div>
                </div>
            </div>
      
    );
  }
}
const LoginPages = Form.create()(Login);
export default LoginPages;
