import * as constants from './actionTypes'
import * as api from '../../../api/header'
import {message} from 'antd';
export const SearchFocus = ()=>({
    type: constants.SEARCH_FOCUS
})
export const SearchBlur = ()=>({
    type: constants.SEARCH_BLUR
})
export const MouseEnter = () => ({
    type: constants.MOUSEENTER
})
export const MouseLeave = () => ({
    type: constants.MOUSELEAVE
})
export const changePage = (page) =>({
    type: constants.CHANGEPAGE,
    page
})
export const getList = () =>{
    return (dispatch) => {
        api.getKeywordList().then(res =>{
            if(res.status === 200) {
                dispatch(changeKeyword(res.data.data))
            }else {
                message.error(res.message)
            }
        })
    }
}
const changeKeyword = (data) => ({
    type: constants.CHANGE_LIST,
    data,
    totalPage: Math.ceil(data.length / 5)
})