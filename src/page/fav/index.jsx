// import
import React, { Component } from 'react'

import FavHeader from './header.jsx';
import FavItem from './item.jsx';
import FavFooter from './footer.jsx';

import './index.css';

class Fav extends Component {
    render() {
        const store = this.props.store;
        return (
            <div className='container'>
                <div className='content'>
                    <FavHeader store={store} />
                    <FavItem store={store} />
                    <FavFooter />
                </div>
            </div>
        )
    }
};
export default Fav;