import React, {Component}from 'react';
import { connect } from 'react-redux';
import {HeaderWraper,Logo,Nav,NavItem,NavSearch,Addtion,Button,SearchWriper,SearchInfo,SearchTitle,SearchSwitch
    ,SearchItem} from  './style'
import {IconfontStyle} from '../../assets/iconfont/iconfont' //iconfont
import { CSSTransition } from 'react-transition-group'
import {actionCreators} from './store'
import {actionCreators as loginActionCreators} from '../../views/Login/store'
import  {BrowserRouter as Router,Redirect,withRouter} from  'react-router-dom'

class Header extends Component {
    login = (data) => {
        console.log(data)
        if(data === 'login') {
            this.props.history.push('/login');
        }else if(data === 'regist') {
            this.props.history.push('/regist');
        }
    }
    SearchSelect = (show) => {
        const {page,list,mouseIn,totalPage}  = this.props
        const newList = []
        if(list.length) {
            for(let i=(page-1) * 4;i< page* 4;i++) {
                    if(list[i]) {
                        newList.push(
                            <SearchItem key={i}>{list[i].name}</SearchItem>
                        )
                    }
            }
        }
        if(show || mouseIn) {
            return (
                <SearchInfo onMouseEnter={this.props.handleMousenter} onMouseLeave={this.props.handleMouseLeave}>
                    <SearchTitle>热门搜索
                        <SearchSwitch onClick={() =>this.props.handlePage(page,totalPage,this.spin)}>
                            <i ref={(Icon) => {this.spin = Icon}} className='iconfont spin' style={{fontSize:'14px',marginTop: '5px'}}>&#xe606;</i>
                            换一批</SearchSwitch>
                    </SearchTitle>
                    {
                       newList
                    }
                </SearchInfo>
            )
        }else {
            return null
        }
    }
    render() {
        const { focused,loginStatus,loginOut,loginIn}  = this.props
        return (
            <Router>
            <div className='header'>
                <IconfontStyle/>
                <HeaderWraper>
                    <Logo href='/'/>
                    <Nav>
                        <NavItem className="left active">首页</NavItem>
                        <NavItem className="left">下载App</NavItem>
                        {
                            !loginStatus ? <NavItem className="right" onClick={() => this.login('login')}>登录</NavItem>:
                                <NavItem className="right" onClick={loginOut}>退出</NavItem>
                        }

                        <NavItem className="right">
                            <i className='iconfont'>&#xe636;</i>
                        </NavItem>
                        <SearchWriper>
                            <CSSTransition
                            timeout={200}
                            in={focused}
                            classNames="slide"
                            >
                            <NavSearch className={focused ? 'focused': ''} onFocus={this.props.handleFocus} onBlur={this.props.handleBlur}>
                            </NavSearch>
                            </CSSTransition>
                            <i className={focused ? 'focused iconfont': 'iconfont'}>&#xe64d;</i>
                            {this.SearchSelect(focused)}
                        </SearchWriper>
                    </Nav>
                    <Addtion>
                        <Button className='writting'>
                            <i  style={{marginRight: '2px'}} className='iconfont'>&#xe653;</i>
                            写文章</Button>
                        {
                            !loginStatus ? <Button className='regist' onClick={() => this.login('regist')}>
                                注册</Button> : ''
                        }

                    </Addtion>
                </HeaderWraper>
            </div>
                </Router>
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
        loginStatus: state.login.loginStatus,
    }
}
const mapDispatchToPros = (dispatch) => {
    return {
        //派发action
        handleFocus() {
            dispatch(actionCreators.getList())
            dispatch(actionCreators.SearchFocus())
        },
        handleBlur() {
            dispatch(actionCreators.SearchBlur())
        },
        handleMousenter() {
            dispatch(actionCreators.MouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.MouseLeave())

        },
        //退出登录
        loginOut() {
          localStorage.removeItem('jwToken')
            dispatch(loginActionCreators.loginSuccess(false))
            return <Redirect to='/login'/>
        },

        //换页
        handlePage(page,totalPage) {
            console.log(page,totalPage)
            if(page < totalPage) {
                dispatch(actionCreators.changePage(page+ 1));
            }else {
                dispatch(actionCreators.changePage(1))
            }
        }

    }
}
export  default  withRouter(connect(mapStateToProps,mapDispatchToPros)(Header))