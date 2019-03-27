import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { MobxRouter, startRouter } from 'mobx-router';
import { Provider } from 'mobx-react';
import store from './mobx/store.jsx';

//router
import views from './config/views.jsx';
startRouter(views, store);

ReactDOM.render(
    <Provider store={store} >
        <div>
        <button onClick={() => store.router.goTo(views.home)}> go home</button>
        <MobxRouter/>
        </div>
    </Provider>,
    document.getElementById('root')
);