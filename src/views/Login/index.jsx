import React, {Component} from 'react';
import {LoginForm, DataForm, Top} from './style'
import {Redirect} from 'react-router-dom'
import {Form, Input, Button, Checkbox, Spin} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {connect} from  'react-redux'
import {actionCreators} from './store'
class Login extends Component {

    componentDidMount() {
    }

    render() {
        const {loading,loginStatus,onFinish} = this.props
        return (
            loginStatus ? <Redirect to='/' exact/> :

                    <div style={{width: '100%', height: "100%", backgroundColor: "#f1f1f1", position: 'relative'}}
                         className='aa'>
                        <LoginForm>
                            <Spin size="large" spinning={loading} tip="Loading..." style={{zIndex: "999999" ,left:"50%",verticalAlign:"middle",position: 'absolute',top:"50%",transform: "translate(-50%,-50%)"}}/>
                            <img className='logo_pic'
                                 src="https://cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png" alt=""/>
                            <DataForm>
                                <Top>
                                    <h2>用户登陆</h2>
                                </Top>
                                <Form
                                    name="normal_login"
                                    className="login-form"
                                    initialValues={{remember: true}}
                                    onFinish={onFinish}
                                >
                                    <Form.Item
                                        name="phoneNumber"
                                        rules={[
                                            {
                                                validator: (_, value) => {
                                                    if (!(/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(value))) {
                                                        return Promise.reject('请输入正确的手机号')
                                                    } else {
                                                        return Promise.resolve()
                                                    }
                                                }
                                            }
                                        ]}
                                    >
                                        <Input prefix={<UserOutlined className="site-form-item-icon"/>}
                                               placeholder="手机号"/>
                                    </Form.Item>
                                    <Form.Item
                                        name="password"
                                        rules={[
                                            {
                                                validator: (_, value) => {
                                                    if (!(/^[0-9a-zA-Z]{2,19}$/.test(value))) {
                                                        return Promise.reject('密码至少2位数,必须由数字和字母组成')
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
                                        <Form.Item name="remember" valuePropName="checked" noStyle>
                                            <Checkbox>记住我</Checkbox>
                                        </Form.Item>

                                        <p className="login-form-forgot" >
                                            登录遇到问题？
                                        </p>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button">
                                            登录
                                        </Button>

                                    </Form.Item>
                                </Form>
                            </DataForm>
                        </LoginForm>
                    </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused,
        list: state.header.list,
        page: state.header.page,
        mouseIn: state.header.mouseIn,
        totalPage: state.header.totalPage,
        login: state.login.login,
        loginStatus: state.login.loginStatus,
        loading: state.login.loading,
    }
}
const mapDispatchToPros = (dispatch) => {
    return {
        onFinish(values){
                dispatch(actionCreators.goLogin(values.phoneNumber,values.password))
                dispatch(actionCreators.changeLoading(true))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToPros)(Login);