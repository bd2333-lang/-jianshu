import * as constants from './actionTypes'
import * as api from '../../../api/login'
import {message} from 'antd'
export const goReigist = (values)=>{
    return (dispatch) => {
        //发送注册请求，注册成功，则改变状态,跳转到登录页面
        api.regist({nickname: values.nickname,phoneNumber: values.phoneNumber,password:values.password,code: values.code}).then(res => {
                if(res.data.status === '200') {
                    message.success(res.data.message);
                    dispatch(changeRegistStatus(true))
                    dispatch(changeLoading(false))
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
//改变注册状态
export const changeRegistStatus = (data) =>({
    type: constants.REGISTTATUS,data
})

