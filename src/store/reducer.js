import { combineReducers } from 'redux';
import {reducer as  headerReducer} from '../common/header/store' //组件内的reducer
import {reducer as  homeReducer} from '../views/Home/store' //组件内的reducer
import { reducer as loginReducer} from '../views/Login/store'
import { reducer as registReducer} from '../views/Register/store'
const reducer =  combineReducers({
    header: headerReducer,
    home: homeReducer,
    login: loginReducer,
    regist: registReducer,
})
export default reducer;
