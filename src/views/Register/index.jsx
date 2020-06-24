import   React,{Component} from 'react';
import {LoginForm, DataForm, Top} from './style'
import {Redirect} from 'react-router-dom'
import * as api from '../../api/login';
import {Form, Input, Button, Spin,message} from 'antd';
import {UserOutlined, LockOutlined,AppstoreOutlined} from '@ant-design/icons';
import {connect} from  'react-redux'
import {actionCreators} from "./store";
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            disabled: false,
            time: 60,
            sendCodeStatus: true,
        }
    }
    //定时器
    setTime = () => {
        var  times = this.state.time
        console.log(times)
        var timer = setInterval(() => {
            times--;
            this.setState({
                time: times,
                disabled: true
            })
            if (times === 0) {
                this.setState({
                    disabled: false,
                    time: 10,
                })
                clearInterval(timer);
                timer = null;
            }
        },1000)
    }
    checkNickName = ()=>{
        console.log(this.refs.nickname.state.value)

    }
    sendCode = () =>{
        const number = this.refs.phoneNumber.state.value
        api.sendCode({phoneNumber: number}).then(res => {
            if(res.data.status === '200') {
                //发送成功
                message.success(res.data.message)
                this.setState({
                    disabled: true
                })
                this.setTime()
            }else {
                message.error(res.data.message)
            }
        }).catch(err =>{
            message.error('网络异常')
        })
    }

    render() {
        const validator  = (rule,value,callback)=>{
            if (!value) {
                return callback("昵称不能为空");
            } else {
                if (!/^[\u4e00-\u9fa5_a-zA-Z0-9]{2,19}$/.test(value)) {
                    callback('昵称格式不正确,必须为数字，中文或字母组成！');
                } else {
                    return callback()
                }
            }
        }
        const validatorPhone = (rule,value,callback) => {
            if (!value) {
                this.setState({
                    sendCodeStatus: true
                })
                return callback("手机号码不能为空");
            } else {
                if (!/^1([3578][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(value)) {
                    callback('手机号码格式有误！');
                } else {
                    this.setState({
                        sendCodeStatus: false
                    })
                    return callback()
                }
            }
        }
        const {time,disabled,sendCodeStatus} = this.state
        const {onFinish,loading,registStatus} = this.props
        return (
            registStatus ? <Redirect to='/login' exact/> :
            <div style={{width: '100%', height: "100%", backgroundColor: "#f1f1f1", position: 'relative'}}
                 className='aa'>
                <LoginForm>
                    <Spin size="large" spinning={loading} tip="Loading..." style={{zIndex: "999999" ,left:"50%",verticalAlign:"middle",position: 'absolute',top:"50%",transform: "translate(-50%,-50%)"}}/>

                    <img className='logo_pic'
                         src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""/>
                    <DataForm>
                        <Top>
                            <h2>用户注册</h2>
                        </Top>
                        <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                    >
                        <Form.Item name="nickname"
                                   rules={[
                                       {
                                           required: true,

                                           validator: validator
                                       },
                                   ]}
                        >

                            <Input ref="nickname" prefix={<UserOutlined className="site-form-item-icon" />}
                                   placeholder="昵称" onBlur={this.checkNickName}/>
                        </Form.Item>
                        <Form.Item
                            name="phoneNumber"
                            rules={[
                                {
                                    required: true,

                                    validator: validatorPhone
                                },
                            ]}
                        >
                            <Input ref='phoneNumber' prefix={<UserOutlined className="site-form-item-icon"/>}
                                   placeholder="手机号"/>
                        </Form.Item>
                        <Form.Item
                            name="code"
                            >

                            <Input prefix={<AppstoreOutlined className="site-form-item-icon"/>} placeholder="手机验证码" />
                        </Form.Item>
                            {
                            disabled ? <Button type='button'  className='codeButton times'>{time}s</Button> :
                            <Button style={{color: (sendCodeStatus) ? "#777" : "#fff"}} type='button' disabled={sendCodeStatus} className='codeButton' onClick={this.sendCode}>发送验证码</Button>
                            }
                        <Form.Item
                                name="password"
                                rules={[
                                    {
                                        validator: (_, value) => {
                                            if (!(/^[0-9a-zA-Z]{2,19}$/.test(value))) {
                                                return Promise.reject('密码至少2位数,必须由数字或字母组成')
                                            } else {
                                                return Promise.resolve()
                                            }
                                        }
                                    }

                                ]}
                            >
                                <Input.Password prefix={<LockOutlined className="site-form-item-icon"/>}
                                                placeholder="密码"/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    注册
                                </Button>
                            </Form.Item>

                    </Form>
                        <p className="showText">点击 “注册” 即表示您同意并愿意遵守简书
                            </p>
                        <p className='showBottom'><a href="https://www.jianshu.com/p/c44d171298ce">用户协议</a> 和 <a href="https://www.jianshu.com/p/2ov8x3">隐私政策</a> 。</p>
                    </DataForm>
                </LoginForm>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        registStatus: state.regist.registStatus,
        loading: state.regist.loading,
    }
}
const mapDispatchToPros = (dispatch) => {
    return {
        onFinish(values){
            console.log(values)
            dispatch(actionCreators.goReigist(values))
            dispatch(actionCreators.changeLoading(true))
        },
    }
}


export default connect(mapStateToProps,mapDispatchToPros)(Register);