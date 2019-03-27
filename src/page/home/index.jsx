// import
import React, { Component } from 'react'
import { Button, Menu } from 'antd';
import 'antd/dist/antd.css';
import views from '../../config/views.jsx';

class Home extends Component {

    constructor(props) {
        super(props);

        console.log(this.props);
    }

    render() {

        const { store } = this.props;

        return (
            <Button onClick={() => {
                store.router.goTo(views.fav, { id: 123 }, store)
            }}>1123</Button>
        )
    }
}
export default Home;
