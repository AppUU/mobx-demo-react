// import
import React, { Component } from 'react'
import { observer } from 'mobx-react';
import { Link } from 'mobx-router';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

import './index.css';

//http://47.100.245.51:8080/examonline/userfiles/1/images/photo/2018/11/22.png

@observer
class FavItem extends Component {

    render() {
        const { name } = this.props.store;
        console.log(name);
        return (
            <div>
                <Row style={{ marginTop: 30 }} type="flex" justify="center" gutter={16}  >
                    <Col ><div>{this.renderItem()}</div></Col>
                    <Col ><div>{this.renderItem()}</div></Col>
                    <Col ><div>{this.renderItem()}</div></Col>
                    <Col ><div>{this.renderItem()}</div></Col>
                </Row>
                <Row style={{ marginTop: 30 }} type="flex" justify="center" gutter={16}  >
                    <Col ><div>{this.renderItem()}</div></Col>
                    <Col ><div>{this.renderItem()}</div></Col>
                    <Col ><div>{this.renderItem()}</div></Col>
                    <Col ><div>{this.renderItem()}</div></Col>
                </Row>
            </div>
        )
    }

    renderItem() {
        return (
            <div className='item' >
                <div>
                    <img
                        width='160'
                        height='110'
                        src='https://xjrta.com/examonline/userfiles/1/images/photo/2018/11/22.png' />
                    <div>12:30</div>
                </div>
                <div className='title'>123</div>
                <div className='study'>1234</div>
                <Link ></Link>

            </div>
        )
    }
};
export default FavItem;