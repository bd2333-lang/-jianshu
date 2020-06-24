import * as constants from './actionTypes'
const  defaultState = {
    focused: false,
    list: [],
    page: 1,
    totalPage: 1,
    mouseIn: false,
}
export default (state = defaultState, action) => {
    const newState =  JSON.parse(JSON.stringify(state))
    switch(action.type) {
            case constants.SEARCH_FOCUS:
                newState.focused = true
                return newState
            case constants.SEARCH_BLUR:
                newState.focused = false
                return newState
            case constants.CHANGE_LIST:
                newState.list = action.data
                newState.totalPage =  action.totalPage
                return newState
            case constants.MOUSEENTER:
                newState.mouseIn = true
                return newState
            case constants.MOUSELEAVE:
                newState.mouseIn = false
                return newState 
            case constants.CHANGEPAGE:
                newState.page = action.page
                return newState    
            default:
                return state
    }
}