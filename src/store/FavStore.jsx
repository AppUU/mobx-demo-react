import { observable, action } from 'mobx';
import axios from 'axios';
import api from '../component/api/index.jsx';

class FavStore {
    @observable cache = { queue: [] }
    @observable name = '点击按钮加载数据'
    @observable loading = false
    @observable message = '点击加载数据'

    @action.bound refresh(url) {
        this.loading = true;
        this.message = '加载中...'
        axios.get(url).then(res => {
            this.loading = false;
            this.message = '加载成功';
            this.name = JSON.stringify(res);
        }).catch(() => {
            this.loading = false;
            this.message = '加载失败';
        })
    }
}
export default new FavStore();