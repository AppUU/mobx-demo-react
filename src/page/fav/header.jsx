// import
import React, { Component } from 'react'
import { Button, Menu } from 'antd';
import 'antd/dist/antd.css';
import { observer } from 'mobx-react';
import api from '../../component/api/index.jsx';

import './index.css';
//加载图片
const dyIcon = require('./../../images/douyinicon.png');


@observer
class FavHeader extends Component {

    state = {
        current: 'home'
    }
    render() {
        const { loading, message } = this.props.store;
        return (
            <div className='header'>
                <div>
                    <img src={dyIcon} />
                </div>
                {/* <Menu
                    style={{ width: 400, color: '#fff', background: 'rgba(0, 0, 0, 0)' }}
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode='horizontal'>
                    <Menu.Item key='home'>
                        首页
                    </Menu.Item>
                    <Menu.Item key='train'>
                        培训
                    </Menu.Item>
                    <Menu.Item key='exam'>
                        考核
                    </Menu.Item>
                    <Menu.Item key='mine'>
                        我的
                    </Menu.Item>
                </Menu> */}
                {/* <Button
                    style={{ width: 200, margin: 16 }}
                    type="primary"
                    loading={loading}
                    onClick={this.refresh}>{message}</Button> */}
            </div>
        )
    }

    handleClick = (e) => {
        this.setState({
            current: e.key
        })
    }
    refresh = () => {
        this.props.store.refresh(api.BASE_URL)
    }
};
export default FavHeader;