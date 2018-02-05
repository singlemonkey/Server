import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Topbar from './components/topbar';
import Sidebar from './components/sidebar'

//渲染上方导航栏
const topbarList = {
    UserControl: {
        avatorUrl: '../../images/user/avator.jpeg',
        userName: '君临',
        userMood: '情之一字，忌讳莫深',
        entrances: [
            {
                name: '基本信息',
                url: '/Home/UserInfo',
                icon:'icon-info'
            },
            {
                name: '系统设置',
                url: '/Home/Setting',
                icon: 'icon-info'
            },
            {
                name: '通知管理',
                url: '/Home/Setting',
                icon: 'icon-info'
            },
        ]
    }
};
ReactDOM.render(
    <Topbar list={topbarList} />,
    document.getElementById('topbar')
);

//渲染左侧菜单栏
const menuItems = [
    {
        name: '博客管理',
        items: [
            {
                name:'博客列表',
                url: '/Blog/BlogList',
                icon:'icon-bloglist'
            },
            {
                name: '发布博客',
                url: '/Blog/BlogEdit',
                icon: 'icon-blogedit'
            }
        ]
    }
]
ReactDOM.render(
    <Sidebar menu={menuItems} />,
    document.getElementById('sidebar')
);


