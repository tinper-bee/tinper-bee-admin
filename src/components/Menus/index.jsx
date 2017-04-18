import React, { Component } from 'react';
import { Navbar, Icon } from 'tinper-bee';

import './index.css';

const Menu = Navbar.Menu;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Menus extends Component {
	constructor(props, context) {
	    super(props, context);
	    this.state = {
	    	current : 1
	    }
	}
	handleClick(e) {
	    console.log('click ', e);
	    this.setState({
	      current: e.key,
	    });
	  }
	render(){
		const { toggle } = this.props;
		return( 
			<Menu onClick={this.handleClick.bind(this)}
		        defaultOpenKeys={['demo3sub1']}
		        selectedKeys={[this.state.current]}
		        mode={toggle ? "vertical" : "inline"}
		      >
				<Menu.Item key="1">
					<Icon type="uf-9square-2" />
					{toggle ? "" : <span>仪表盘</span>}
				</Menu.Item>
				<Menu.Item key="2">
					<Icon type="uf-userset" />
					{toggle ? "" : <span>用户管理</span>}
				</Menu.Item>
		        <SubMenu
					key="sub1"
					title={<span><Icon type="uf-cloud-up" />{toggle ? "" : <span>Request</span>}</span>}>
		          <Menu.Item key="3">Option 9</Menu.Item>
		          <Menu.Item key="4">Option 10</Menu.Item>
		          <Menu.Item key="5">Option 11</Menu.Item>
		          <Menu.Item key="6">Option 12</Menu.Item>
		        </SubMenu>
				<SubMenu key="sub2" title={<span><Icon type="uf-puzzle-o" />{toggle ? "" : <span>UI Element</span>}</span>}>
					<Menu.Item key="7">Option 9</Menu.Item>
					<Menu.Item key="8">Option 10</Menu.Item>
					<Menu.Item key="9">Option 11</Menu.Item>
					<Menu.Item key="10">Option 12</Menu.Item>
				</SubMenu>
				<SubMenu key="sub3" title={<span><Icon type="uf-histogram-s-o-2" />{toggle ? "" : <span>Recharts</span>}</span>}>
					<Menu.Item key="11">Option 9</Menu.Item>
					<Menu.Item key="12">Option 10</Menu.Item>
					<Menu.Item key="13">Option 11</Menu.Item>
					<Menu.Item key="14">Option 12</Menu.Item>
				</SubMenu>
		      </Menu>
		)
	}
}


export default Menus;
