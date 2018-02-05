import React, { Component} from 'react';
import ReactDom from 'react-dom';

class Entrance extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <a className="topbar-user-entrance" href={this.props.info.url}>
                <i className={`iconfont ${this.props.info.icon}`}></i>
                <span>{this.props.info.name}</span>
            </a>
        );
    }
}

//用户工具构造
class Userbar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const entrances = this.props.userControl.entrances.map((entrance) => {
            return <Entrance key={entrance.name} info={entrance} />
        });
        return (
            <div className="nav-item">
                <a className="nav-item-toggle">
                    <img alt="本尊" className="nav-user-avator" src={this.props.userControl.avatorUrl} />
                </a>
                <div className="nav-dropdown-menu nav-user">
                    <div className="nav-user-info">
                        <p className="nav-user-name">
                            <span>{this.props.userControl.userName}</span>
                        </p>
                        <p className="nav-user-mood">
                            <span>{this.props.userControl.userMood}</span>
                        </p>
                    </div>
                    <div className="nav-user-contorl">
                        {entrances}
                    </div>
                </div>
            </div>
        );
    }
}

//总体的topbar构造
export default class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <React.Fragment>
                <Userbar userControl={this.props.list.UserControl} />
            </React.Fragment>
        );
    }
}