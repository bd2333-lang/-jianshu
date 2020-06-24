import styled from 'styled-components';
import  logoPic from './images/logo.png'
export const HeaderWraper = styled.div`
    height: 56px;
    position: relative;
    border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a`
	position: absolute;
	top: 0;
	left: 50px;
	display: block;
	width: 100px;
	height: 56px;
	background: url(${logoPic});
	background-size: contain;
`;

export const Nav = styled.div`
	width: 960px;
	height: 100%;
	padding-right: 70px;
	cursor: pointer;
	box-sizing: border-box;
	margin: 0 auto;
`;

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
	color: #333;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    padding: 0 20px;
    position:relative;
    height: 38px;
    margin: 9px 0 10px 20px;
    outLine: none;
    border-radius: 19px;
    border: none;
    background: #eee;
    font-size: 14px;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px
    }
    &.slide-exit {
         transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 240px;
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    top: 56px;
    width: 280px;
    z-index: 9999;
    border-radius: 12px;
    left: 0;
    padding: 0 20px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchTitle = styled.div`
   font-size: 14px;
   margin-top: 20px;
   margin-bottom: 15px;
   line-height: 20px;
   color: #969696;
`

export const SearchSwitch  = styled.span`
    float: right;
    font-size: 13px;
    cursor:pointer;
    .spin {
        font-size: 12px;
        float:right;
        margin-right: 50px;
        margin-top: 12x;
        transition: all .2s ease-out;
        transform: rotate(0deg);
        transform-orgin: center center;
        display: block;
    }
`
export const SearchItem = styled.a`
   line-height: 20px;
   padding:0 5px;
   display:block;
   color:#969696;
   float:left;
   margin-right: 15px;
   margin-bottom: 15px;
   border: 1px solid #eee;
   border-radius: 3px;

`

export  const Addtion = styled.div`
    position: absolute;
    right: 25px;
    top: 0;
    height: 56px
`
export  const Button = styled.div`
    outLine: none;
    border-radius: 19px;
    border: none;
    padding: 0 20px;
    line-height: 38px;
    text-align:center;
    width: 100px;
    height: 38px;
    margin: 9px 0;
    background: red;
    float: right;
    margin-right: 15px;
    &.writting {
        background: #EA6F5A;
        color: #fff;
        width: 110px;
    }
    &.regist {
        color: #EA6F5A;
        cursor: pointer;
        border: 1px solid #EA6F5A;
        background: #fff;
    }
`
export const SearchWriper = styled.div`
    float: left;
    position: relative;
    
    .iconfont {
        position: absolute;
        right: 8px;
        font-size: 18px;
        top: 12px;
        width:30px;
        height: 30px;
        line-height: 30px;
        border-radius: 50%;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`

