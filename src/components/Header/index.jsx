import React, { Component } from 'react';
import "./index.scss"
import {LogoutOutlined} from "@ant-design/icons"
import Logo from '../images/logo.png'
class Header extends Component {
    state = {  }
    render() {
        return (
            <div className='header'>
                <div className='box-container'>
                    <img src={Logo} alt=""/>
                    <div>
                        <LogoutOutlined  style={{color:'#EA6F5A',marginLeft: '100px'}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header