import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';

/*class EchartsLists extends Component {
  render() {
    return (
      <div>
          Music
      </div>
    );
  }
}

export default EchartsLists;*/
const option = {
        title: {
            text: '世界人口总量',
            subtext: '数据来自网络'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['2011年', '2012年']
        },
        grid: {
            left: '5%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
        },
        yAxis: {
            type: 'category',
            data: ['巴西','印尼','美国','印度','中国','世界人口(万)']
        },
        series: [
            {
                name: '2011年',
                type: 'bar',
                data: [22, 23, 234, 10, 13, 63]
            },
            {
                name: '2012年',
                type: 'bar',
                data: [19, 23, 31, 14, 13, 6]
            }
        ]
    };
const EchartsProjects =()=>(
    <ReactEcharts
        option={option}
        style={{height:'220px',width:'100%'}}
    ></ReactEcharts>
);
export default EchartsProjects;