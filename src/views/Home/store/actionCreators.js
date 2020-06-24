import * as constants from './actionTypes'
import * as api from '../../../api/home'
import {message} from 'antd';
// export const getArtitleList = ()=>({
//     type: constants.GETARTITLELIST
// })

export const getArtitleList = (page) =>{
    return (dispatch) => {
        dispatch(changeLoading(true))
        api.getArtitleLists({page:page,pageSize: 6}).then(res =>{
            if(res.status === 200) {
                dispatch(getArticle(res.data.data,page))
                dispatch(changeLoading(false))

            }else {
                message.error(res.message)
            }
        })
    }
}
export const getAuthorList = (authorPage) => {
    return (dispatch) =>{
        var pageSize = 5
        api.getAuthor({page:authorPage,pageSize:pageSize}).then(res =>{
            if(res.status === 200) {
                dispatch(getAuthor(res.data.data,res.data.total_count,authorPage))
            }else {
                message.error(res.message)
            }
        })
    }
}
export const getAuthor =(data,total_count,authorPage) => ({
    type: constants.GETAUTHOR,
    data,
    total_count,
    authorPage
})
export const changeLoading = (data) => ({
    type: constants.CHANGELOADING,data
})
export const getArticle = (data,page) => ({
    type: constants.GETARTITLELIST,data,page

})
//阅读更多
// export const getReadMoreList = () =>{
//     return (dispatch) => {
//         api.getArtitleLists().then(res =>{
//             if(res.status === 200) {
//                 dispatch(getArticle(res.data.data))
//             }else {
//                 message.error(res.message)
//             }
//         })
//     }
// }