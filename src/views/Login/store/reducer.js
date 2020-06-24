import * as constants from './actionTypes'
const  defaultState = {
    login: false,
    loginStatus: false, //登录状态
    loading: false, //登录loading
}
export default (state = defaultState, action) => {
    const newState =  JSON.parse(JSON.stringify(state))
    switch(action.type) {
        case constants.CHANGELOADING:
         newState.loading =  action.data
        return newState
        case constants.LOGINSUCCESS:
            newState.loginStatus = action.data
            return newState
        default:
                return state
    }
}