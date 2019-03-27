import React from 'react';
//models
import { Route } from 'mobx-router';

import Home from '../page/home/index.jsx'
import Fav from '../page/fav/index.jsx';

const views = {
    home: new Route({
        path: '/',
        component: <Home />
    }),
    fav: new Route({
        path: '/:id',
        component: <Fav />,
        onEnter: () => {
            console.log('entering user profile!');
        },
        beforeExit: () => {
            console.log('exiting user profile!');
        },
        onParamsChange: (route, params) => {
            console.log('params changed to', params);
        }
    })
}
export default views;