import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import  'antd/dist/antd.css'
import {Provider} from 'react-redux';
import store from './store';
// import {persistor} from './store';
import {persistor} from './store'
import {PersistGate} from 'redux-persist/lib/integration/react';
import Login from './views/Login'
import Home from './views/Home'
import Register from './views/Register'
import  {GlobalStyled} from './style'
class App extends Component{
	constructor() {
		super()
		this.state ={

		}
	}
	render() {
		return (
            <div style={{width:"100%",height: "100%"}}>
                <GlobalStyled/>
                    <Provider store={store}>
                        <PersistGate loading={null} persistor={persistor}>
                        <Router>
                            <Switch>
                                <Route path="/login" exact component={Login}></Route>
                                <Route path="/regist" exact component={Register}></Route>
                                <Route path="/" exact component={Home}></Route>
                            </Switch>
                        </Router>
                        </PersistGate>
                    </Provider>
            </div>
        )
	}
}

export default App;
