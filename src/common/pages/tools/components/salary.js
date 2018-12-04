import React, { Component } from 'react';
import { Input, Icon,message,Row, Col} from 'antd';

class Salary extends Component {
  constructor(props){
    super(props);
    this.state={
      old:'', //养老保险
      medical:'',  //医疗保险
  	  offwork:'',  //失业保险
    }
  }
  //触发应发工资
  handleChange=(e)=> {
    let input = e.target.value;
    if(input >= 10000){
        message.success('工资过万喽');
    }
    const old = input*8/100;
  		const medical = input*2/100 + (input > 0 ? 3 : 0);
  		const offwork = input*2/1000;
  		const house = input*12/100;
  		const pretax = (input-old-medical-offwork-house);
  		const taxBase = pretax-3500;
  		let tax;
  		if(taxBase <= 0) {
  			tax = 0;
  		} else if(taxBase > 0 && taxBase <= 1500) {
  			tax = taxBase*3/100;
  		} else if(taxBase > 1500 && taxBase <= 4500) {
  			tax = taxBase*10/100-105;
  		} else if(taxBase > 4500 && taxBase <= 9000) {
  			tax = taxBase*20/100-555;
  		} else if(taxBase > 9000 && taxBase <= 35000) {
  			tax = taxBase*25/100-1005;
  		} else if(taxBase > 35000 && taxBase <= 55000) {
  			tax = taxBase*30/100-2775;
  		} else if(taxBase > 55000 && taxBase <= 80000) {
  			tax = taxBase*35/100-5505;
  		} else if(taxBase > 80000) {
  			tax = taxBase*45/100-13505;
  		}
  		const cleanTax = tax.toFixed(2);
  		const output = (pretax -tax).toFixed(2);

  		this.setState({
  			old:old,   //养老保险
  			medical:medical,  //医疗保险
  			offwork:offwork,  //失业保险
  			house:house,   //住房公积
  			pretax:pretax,  //税前工资
  			tax:cleanTax,  //个人税收
  			output:output,   //税后工资
  		});
  }
  render() {
    return (
      <div className="tab-box">
          <Row type="flex" justify="center" className="rowItem">
							<Col span={24}>
		  		  	 	<Input type="number" addonBefore="应发工资：" addonAfter="￥" 
							 onChange={(event) => this.handleChange(event)} className="rowInput"/>
	  	  			</Col>
  	  			</Row>
  	  			<Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={24}>
	  	  				<Input addonBefore="养老保险：" addonAfter="￥" value={this.state.old} />
	  	  			</Col>
	  	  		</Row>
	  	  		<Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={24}>
	  	  				<Input addonBefore="医疗保险：" addonAfter="￥" value={this.state.medical} />
	  	  			</Col>
	  	  		</Row>
	  	  		<Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={24}>
	  	  				<Input addonBefore="失业保险：" addonAfter="￥" value={this.state.offwork} />
	  	  			</Col>
	  	  		</Row>
	  	  		<Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={24}>
	  	  				<Input addonBefore="住房公积：" addonAfter="￥" value={this.state.house} />
	  	  			</Col>
	  	  		</Row>
	  	  		<Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={24}>
	  	  				<Input addonBefore="税前工资：" addonAfter="￥" value={this.state.pretax} id="red"/>
	  	  			</Col>
	  	  		</Row>
	  	  		<Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={24}>
	  	  				<Input addonBefore="个人税收：" addonAfter="￥" value={this.state.tax} />
	  	  			</Col>
	  	  		</Row>
	  	  		<Row type="flex" justify="center" className="rowItem">
	  	  			<Col span={24}>
	  	  				<Input addonBefore="税后工资：" addonAfter="￥" value={this.state.output} id="blue"/>
	  	  			</Col>
	  	  		</Row>
      </div>
    );
  }
}

export default Salary;