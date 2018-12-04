import React, { Component } from 'react';
import {Table} from 'antd';

class Music extends Component {
  
  render() {
    const dataSource = [{    //数据
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    }, {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }, {
      key: '3',
      name: '胡彦祖123',
      age: 42,
      address: '西湖区湖底公园1号'
    }];

    const columns = [{   //表头
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    }];
    return (
      <div>
          <Table dataSource={dataSource} columns={columns} />
      </div>
    );
  }
}

export default Music;