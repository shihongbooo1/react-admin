import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

class EchartsProjects extends Component {
  render() {
      const option = {
            //backgroundColor: '#6e80b2',  //背景颜色
            color:['#6e80b2'],   //图表的颜色
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisLabel:{
                    textStyle:{   //设置文字
                        color:'#6e80b2'
                    }
                }, 
                axisLine:{
                    lineStyle:{     //线条颜色
                        color:'#6e80b2'
                    }
                }
            },
            yAxis: {
                type: 'value',
                axisLabel:{
                    textStyle:{   //设置文字
                        color:'#6e80b2'
                    }
                }, 
                axisLine:{
                    lineStyle:{     //线条颜色
                        color:'#6e80b2'
                    }
                }
            },
            series: [{
                //data: [80, 932, 341, 934, 1290, 1330, 1320],
                data:this.props.option,
                type: 'bar'
            }]
        };
    return (
      <ReactEcharts
            option={option}
            style={{height:'220px',width:'100%'}}
        ></ReactEcharts>
    );
  }
}

export default EchartsProjects;

