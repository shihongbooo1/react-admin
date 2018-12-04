import React, { Component } from 'react';
import { Tabs } from 'antd';
import Salary from './components/salary';  //工资帽
import House from './components/house';  //小房租
import Bmi from './components/bmi';  //身体指数
import Age from './components/age';  //多大了
import './index.scss';

const TabPane = Tabs.TabPane;
class Tools extends Component {
  
  render() {
     return (
      <div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="工资帽" key="1"><Salary/></TabPane>
            <TabPane tab="小房租" key="2"><House/></TabPane>
            <TabPane tab="身体指数" key="3"><Bmi/></TabPane>
            <TabPane tab="多大了" key="4"><Age/></TabPane>
            <TabPane tab="施工中" key="5" disabled >5555</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default Tools;