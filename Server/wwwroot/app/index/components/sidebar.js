import React, { Component } from 'react';
import ReactDom from 'react-dom';

//整体的左侧菜单栏
export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMenu: localStorage.getItem('currentMenu'),
            currentItem: localStorage.getItem('currentItem')
        };

        this.onCurrentMenuChange = this.onCurrentMenuChange.bind(this);
        this.onCurrentItemChange = this.onCurrentItemChange.bind(this);
    }

    onCurrentMenuChange(menuName) {
        localStorage.setItem('currentMenu', menuName);
        this.setState({
            currentMenu: menuName
        });
    }

    onCurrentItemChange(itemName) {
        localStorage.setItem('currentItem', itemName);
    }

    render() {

        const menus = this.props.menus.map((menu) => {
            return <MenuItem key={menu.name} menuItem={menu}
                currentMenu={this.state.currentMenu}
                currentItem={this.state.currentItem}
                onCurrentMenuChange={this.onCurrentMenuChange}
                onCurrentItemChange={this.onCurrentItemChange}
            />
        });

        return menus;
    }
}

//子模块菜单
class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: this.props.currentMenu == this.props.menuItem.name ? true : false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        //如果点击的不是自己，则将自己关闭
        if (nextProps.currentMenu != this.props.menuItem.name) {
            this.setState({
                isActive: false
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        //如果该菜单之前是关闭的，且此次依然关闭，则不更新
        var menuName = this.props.menuItem.name;
        if (!this.state.isActive && nextProps.currentMenu != menuName) {
            return false;
        }
        return true;
    }

    toggleMenu() {
        this.props.onCurrentMenuChange(this.props.menuItem.name);
        this.setState({
            isActive: !this.state.isActive
        });
    }

    getMaxHeight() {
        //如果菜单被选中，打开菜单
        if (this.state.isActive) {
            let len = this.props.menuItem.items.length;
            return len * 40 + 2;
        } else {
            return 0
        }
    }

    render() {
        const menuItems = this.props.menuItem.items.map((item) => {
            return <Item key={item.name} item={item} currentItem={this.props.currentItem} onCurrentItemChange={this.props.onCurrentItemChange} />
        });

        const maxHeight = this.getMaxHeight();

        return (
            <div className="sidebar-nav">
                <div className="sidebar-title sidebar-trans" onClick={this.toggleMenu}>
                    <i className="iconfont icon-arrow-right"></i>
                    <span>{this.props.menuItem.name}</span>
                </div>
                <ul className="sidebar-trans" style={{ maxHeight: maxHeight }}>
                    {menuItems}
                </ul>
            </div>
        );
    }
}

//二级菜单项
//TODO:为二级菜单添加active状态管理
class Item extends Component {
    constructor(props) {
        super(props);

        this.toggleItem = this.toggleItem.bind(this);
    }

    toggleItem() {
        this.props.onCurrentItemChange(this.props.item.name);
    }

    render() {
        var isActive = this.props.currentItem == this.props.item.name ? true : false;
        return (
            <li className={isActive ? 'active' : ''}>
                <a href={this.props.item.url} onClick={this.toggleItem}>
                    <div className="nav-icon">
                        <i className={`iconfont ${this.props.item.icon}`}></i>
                    </div>
                    <span className="nav-title">
                        {this.props.item.name}
                    </span>
                </a>
            </li>
        );
    }
}