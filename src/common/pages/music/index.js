import React, { Component } from 'react';
import {Table,Select} from 'antd';
import fetchJsonp from 'fetch-jsonp';
const Option = Select.Option;

class Music extends Component {
  constructor(props){
    super(props);
    this.state={
      tData:[],
      loading:true //加载中
    }
    this.data = [{
        key: '1',
        title: 'aaaaa',
        author: '张学友',
        country: 'aaaa',
        language: 'aaa',
        publishtime: '2018-08-08',
      }, {
        key: '2',
        title: 'aaaaa',
        author: '张学友',
        country: 'aaaa',
        language: 'aaa',
        publishtime: '2018-08-08',
      }, {
        key: '3',
        title: 'aaaaa',
        author: '张学友',
        country: 'aaaa',
        language: 'aaa',
        publishtime: '2018-08-08',
      }, {
        key: '4',
        title: 'aaaaa',
        author: '张学友',
        country: 'aaaa',
        language: 'aaa',
        publishtime: '2018-08-08',
      }];
    this.columns = [
        {
            dataIndex: 'num',
            title: '序号',
            width: 50,
        },{
            dataIndex: 'title',
            title: '歌曲名',
            width: 200,
        }, {
            dataIndex: 'author',
            title: '歌手',
            width: 200,
        }, {
            dataIndex: 'country',
            title: '发行国家',
            width: 150,
        }, {
            dataIndex: 'language',
            title: '语种',
            width: 200,
        }, {
            dataIndex: 'publishtime',
            title: '发行时间',
            width: 200,
        }];
     this.rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        //禁用
        // getCheckboxProps: record => ({
        //   disabled: record.name === 'Disabled User', // Column configuration not to be checked
        //   name: record.name,    //
        // }),
      };
  };
  getData = (typeId) =>{
    fetchJsonp(`http://tingapi.ting.baidu.com/v1/restserver/ting?xml&calback=&from=webapp_music&method=baidu.ting.billboard.billList&type=${typeId}&size=100&offset=0`, {
                method: 'GET'
      })
      .then((res) => {
          return res.json();
      })
    .then((res)=>{
      console.log(res);
      var songList = res.song_list;
      var arr=[];
      //循环返回的数据
      for(var i=0;i<songList.length;i++){
        arr.push({
          //key: songList[i].album_id,
          title: songList[i].album_title,
          author: songList[i].author,
          country: songList[i].country,
          language:songList[i].language,
          publishtime: songList[i].publishtime,
        })
      }
      this.setState({
        tData:arr,
        loading:false  //取消加载
      })
    }).catch((error)=>{
      console.log(error);
    })
  };
  componentDidMount () {  //生命周期
    this.getData('2');  // 默认是热歌版
  };
  //查询
  handleChange(value) {
    this.getData(value);
  }

  render() {
    const data = [{name:'热歌榜',id:2},{name:'新歌榜',id:1},{name:'摇滚榜',id:11},{name:'爵士',id:12},{name:'流行',id:16}];
    return (
      <div>
        <Select defaultValue={data[0].name} style={{ width: 120,marginBottom:20 }} onChange={(value)=>this.handleChange(value)}>
          {
            data.map((item,index)=><Option value={item.id} key={index}>{item.name}</Option>)
          }
        </Select>

          <Table 
          rowSelection={this.rowSelection} 
          columns={this.columns} 
          loading={this.state.loading}
          dataSource={this.state.tData.map((item,i)=>({...item,num:i+1}))} />
      </div>
    );
  }
}

export default Music;