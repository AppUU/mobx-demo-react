import AppStore from './stores/app-store.jsx';
import {RouterStore} from 'mobx-router';

const store = {
  app: new AppStore(),
  router: new RouterStore()
};

export default store;