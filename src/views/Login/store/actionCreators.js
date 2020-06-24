import * as constants from './actionTypes'
import * as api from '../../../api/login'
import {message} from 'antd'
export const goLogin = (phoneNumber,password)=>{
    return (dispatch) => {
        //发送登录请求，请求成功，则改变登录状态,跳转到home页面
        api.login({phoneNumber: phoneNumber,password:password}).then(res => {
                if(res.data.status === '200') {
                    message.success(res.data.message);
                    dispatch(changeLoading(false))
                    dispatch(loginSuccess(true))
                    const token = res.data.token
                    localStorage.setItem('jwToken',token)
                    // localStorage.setItem('loginStatus','true')
                }else {
                    dispatch(changeLoading(false))
                    message.error(res.data.message);
                }
        }).catch(() => {
            message.error('网络异常');
        })
    }
}
//change Loading 状态
export const changeLoading = (data) => ({
    type: constants.CHANGELOADING,data
})
//改变登录状态
export const loginSuccess = (data) =>({
    type: constants.LOGINSUCCESS,data
})

