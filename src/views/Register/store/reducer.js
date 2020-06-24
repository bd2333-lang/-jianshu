import * as constants from './actionTypes'
const  defaultState = {
    loading: false, //登录loading
    registStatus: false,
}
export default (state = defaultState, action) => {
    const newState =  JSON.parse(JSON.stringify(state))
    switch(action.type) {
        case constants.CHANGELOADING:
         newState.loading =  action.data
        return newState
        case constants.REGISTTATUS:
            newState.registStatus = action.data
            return newState
        default:
                return state
    }
}