import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import {getUserInfo} from "actions/userInfo";
//redux的装饰器
/*@connect(
    state => state.userInfo,
    // dispatch => bindActionCreators(action,dispatch)
    dispatch => bindActionCreators(action,dispatch)
)*/
class UserInfo extends Component {

    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        return (
            <div>
                {
                    isLoading ? '请求信息中......' :
                        (
                            errorMsg ? errorMsg :
                                <div>
                                    <p>用户信息：</p>
                                    <p>用户名：{userInfo.name}</p>
                                    <p>介绍：{userInfo.todos}</p>
                                </div>
                        )
                }
                <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
            </div>
        )
    }
}
//connect将store与页面绑定，以便于随时监听到最新的状态
export default connect((state) => ({
    userInfo: state.userInfo
}), {getUserInfo})(UserInfo);
