import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
import store from '../store'
import  axios from  'axios'
import {getInputValue,addItemAction,deleteItemAction,getInitDataAction} from  '../store/actionCreator'
class ToodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        store.subscribe(this.handleChange)

    }
    deleteData =(key) => {
        const action  = deleteItemAction(key)
        store.dispatch(action)
    }
    componentDidMount() {
        axios.get('/shopRefundOrder/findGoodsDetails/').then(res => {
            const data  = res.ad;
            const action  = getInitDataAction(data)
            store.dispatch(action)
            console.log(data)
        })
    }
    handleChange = () =>{
        this.setState(store.getState())
    }

    changeValue =(e) => {
        const action  = getInputValue(e.target.value)
        store.dispatch(action)
    }
    addData =()=> {
        for(let a of this.state.list) {
            if(a === this.state.value)
                return alert('添加课程重复了！')
        }
       const action  =  addItemAction()
        store.dispatch(action)

    }
    enterAdd = (e) => {
        if(e.keyCode ===  '13') {
            for(let a of this.state.list) {
                if(a === this.state.value)
                    return alert('添加课程重复了！')
            }
            this.state.list.push(this.state.value)
            this.setState({
                list: this.state.list
            })
        }
    }
    render() {
        return (
            <div style={{marginLeft: '300px'}}>
                <h1>ToodoList演示案列</h1>
                <input type="text" value={this.state.inputValue} onChange={this.changeValue} onKeyUp={this.enterAdd}/> <button type='button' onClick={this.addData}>添加</button>
                <br/>
                <div>-------------------------------------</div>
                {
                    this.state.list.map((val,key) => {
                    return <div  key={key} style={{display: "flex",marginTop: '10px'}}>
                        <li key={key} style={{marginRight: "20px"}}>{val}</li>
                        <button type='button' onClick={this.deleteData.bind(this,key)}>删除</button>
                    </div>
                            
                        
                    })
                }
            </div>
        );
    }
}

export default ToodoList;