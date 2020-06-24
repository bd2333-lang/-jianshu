import React,{Component}from 'react';
import ReactDOM from 'react-dom';
import src from '../assets/image/1.jpg'
import '../assets/css/index.css';
import propTypes from 'prop-types';
class Welcome extends Component{
    constructor(props) {
        super(props);
        this.state= {
            name: '小李',
            age: 20,
            color: 'red',
            list:['22','33','44','55'],
            list1: [<div>我是第一个</div>,<div>我是第二个div</div>]
        }
        // this.getAge = this.getAge.bind(this)
    }
    getName = () =>{
        alert(this.state.name)
    }
    getAge = () => {
       this.state.name = '哈哈哈哈哈哈哈哈哈哈哈哈哈'
       this.setState({
           name: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'

       })
    
    }
    
    getAge1 =(e) => {
        // this.setState({
        //     name: e.target.msg
        // })
        console.log(e)
        e.target.style.background = '#ccc'
    }
    getUsername = (e) => {
        // this.setState({
        //     name: this.refs.username.value
        // })
        this.setState({
            name: e.target.value
        })
        
    }
    render() {
        let result = this.state.list.map((val,key) => {
            return <li key={key}>{val}</li>
        })
        return <h1 title={this.state.name}>
            <button type='button'>{this.props.title}</button>

            <button onClick={this.getName}>{this.state.name}</button>
            <button onClick={this.getAge}>点击</button>

            <button onClick={this.getAge1.bind(this)}>传值</button>
            {/* <input value={this.state.name} type="text" ref='username' onChange={this.getUsername}/> <button type='button'>获取input值</button> */}
            
            Hello, world {this.props.name} --- {this.state.name}
            <img src={src} alt=""/>
            <img src={require('../assets/image/1.jpg')} alt=""/>
            <img src="https://www.baidu.com/img/flexible/logo/pc/result.png" alt=""/>
            <div className={this.state.color} style={{color: "red",fontSize: 22,border: "1px solid #ccc"}}>div</div>
            <input type="text" htmlFor='name'/>
            {result}
            <br/>
            <div>------------------------</div>
            {/* {
                this.state.list.map((val,key) => {
                    return <li key={key}>{val}</li>
                })
            } */}
            {this.state.list1}
            {/* <button type='button' onClick={this.props.news.bind(this,'你的儿子')}>点我传值</button> */}
        </h1>;
    }
  }
  Welcome.defaultProps= {
    title: 30
  }
  Welcome.propTypes= {
    title:  propTypes.number
  }
export default Welcome;