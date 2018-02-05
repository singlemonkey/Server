import React, { Component } from 'react';
import ReactDom from 'react-dom';

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const menus = this.props.menu.map((menu) => {
            return <MenuItem key={menu.name} menu={menu} />
        });

        return menus;
    }
}

class MenuItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sidebar-nav">
                <div className="sidebar-title sidebar-trans">
                    <i className="iconfont icon-arrow-right"></i>
                    <span>{this.props.menu.name}</span>
                </div>
                <ul></ul>
            </div>
        );
    }
}