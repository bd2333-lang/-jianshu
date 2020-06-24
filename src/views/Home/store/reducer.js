import * as constants from './actionTypes'
const  defaultState = {
    articleList: [{ar_id: 1,title: '金星问许晴：50岁了还单身，你想要怎样的男人？许晴的回答很露骨',artitle_content:'一次采访中，金星问许晴：“50岁了还不结婚，你想要什么样的男人？又问道：“那如果这个男人在外面开会，开了一天，累得不行了，给你打个电话,紧接着，金星又问道：“那如果这个男人在外面开会，开了一天，累得不行了，给你打个电话，那你怎么办，感情就完了吗？'
    ,nickname: '拾壹叔欸',commend_count: 58,like_count: 40}],
    page: 0,
    authorPage: 0,
    loading: false,
    author_List: [],
    total_count: 1,
}
export default (state = defaultState, action) => {
    const newState =  JSON.parse(JSON.stringify(state))
    switch(action.type) {
        case constants.GETARTITLELIST:
            newState.articleList = action.data
            newState.page = action.page
            return newState
        case constants.CHANGELOADING:
            newState.loading = action.data
            return newState
        case constants.GETAUTHOR:
            newState.author_List = action.data
            newState.total_count = action.total_count
            newState.authorPage = action.authorPage
            return newState
        default:
                return state
    }
}