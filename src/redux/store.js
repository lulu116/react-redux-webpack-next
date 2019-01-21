import {createStore, applyMiddleware} from 'redux';
import combineReducers from './reducers.js';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from './middleware/promiseMiddleware'
/*将所有reducer组合起来，通过中间件创建store*/

/*
* redux数据流
* 1.调用store.dispatch(action)发起action
* 2.redux store调用传入的reducer，将当前state action传进来
* 3.根reducer将多个reducer合并成单一state树
* 4.redux store保存根reducer返回完成state树
* */
let store = createStore(combineReducers, applyMiddleware(promiseMiddleware));
export default store;
