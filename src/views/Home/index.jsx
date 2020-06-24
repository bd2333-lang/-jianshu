import React,{Component} from 'react';
import {GlobalStyled} from '../../statics/iconfont/iconfont' //iconfont
import {connect} from 'react-redux';
import {HeaderPager,HomeRight,HomeLeft,ArtitleList,ListBottom,Recommend,RecommendTitle,RecommendSwitch,RecommendList,ButtonPart} from './style'
import {actionCreators} from './store'
import { Button,Spin} from 'antd'
import Header from "../../common/header";

class Home extends Component{
    componentDidMount() {
        //获取文章列表
       this.props.getArticleList(this.props.page)
        this.props.getAuthorList(this.props.authorPage)
    }

    render() {
        const { articleList,readMore,page,loading,author_List,changePage,authorPage,total_count}  = this.props
        return (
            <Spin size="large" spinning={loading} tip="Loading..."  style={{zIndex: "999999" ,left:"50%",verticalAlign:"middle",position: 'absolute',top:"50%",transform: "translate(-50%,-50%)"}}>
            <div className='headers'>
                <Header/>
                <HeaderPager>
                    <GlobalStyled/>

                    <HomeLeft>
                        <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4976/a0012dd0250a3003bca3731ffa6098e82201d024.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                        {
                            articleList.map((item,key) => {
                                return (
                                    <ArtitleList key={item.user_id}>
                                        <h2>{item.title}</h2>
                                        <p>{item.artitle_content}</p>
                                        <ListBottom key={item.user_id}>
                                            <span className='author'>{item.nickname}</span>
                                            <span className="commment">
                                    <i className='iconfont'>&#xe616;</i>
                                    <span style={{marginLeft: "3px"}}>{item.commend_count}</span>
                                </span>
                                            <span className="dianzan">
                                    <i className='iconfont'>&#xe602;</i>
                                        <span style={{marginLeft: "3px"}}>{item.like_count}</span>
                                </span>
                                        </ListBottom>
                                    </ArtitleList>
                                )
                            })
                        }
                        <ButtonPart>
                            <Button type="primary" className='readMore' onClick={() => readMore(page)}>阅读更多</Button>
                        </ButtonPart>
                    </HomeLeft>
                    <HomeRight>
                        <img src="https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png" alt=""/>
                        <img src="https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png" alt=""/>
                        <img src="https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png" alt=""/>
                        <img src="https://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png" alt=""/>
                        <div className='downApp'>
                            <img src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
                            <div>
                                <span style={{fontSize: "15px",color: "#333",display: "flex"}}>下载简书App</span>
                                <span style={{fontSize: "12px",color: "#777"}}>随时随地发现和创作新内容</span>
                            </div>
                        </div>
                        <Recommend>
                            <RecommendTitle>
                                <span>推荐作者</span>
                                <RecommendSwitch onClick={() => changePage(authorPage,total_count)}>
                                    <i className='iconfont spin' style={{fontSize:'14px',marginTop: '5px'}}>&#xe606;</i>
                                    换一批</RecommendSwitch>
                            </RecommendTitle>
                                {
                                    author_List.map((val,key) => {
                                        return (
                                            <RecommendList key={key}>
                                            <img className='headPic' src={val.avatar_source} alt=""/>
                                            <div>
                                                <span style={{fontSize: "15px",color: "#333",display: "flex"}}>{val.nickname}</span>
                                                <span style={{fontSize: "12px",color: "#777"}}>写了{Math.round((val.total_wordage/1000)*100)/100}k字                                                    </span>

                                                <span style={{fontSize: "12px",color: "#777",marginLeft: "10px"}}>{Math.round((val.total_likes_count/1000)*100)/100}k喜欢</span>
                                                <span className="focus"><span className="add">+</span>关注</span>
                                            </div>
                                            </RecommendList>
                                        )
                                    })
                                }

                        </Recommend>
                    </HomeRight>
                </HeaderPager>
            </div>
            </Spin>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        articleList: state.home.articleList,
        page: state.home.page,
        loading: state.home.loading,
        authorPage: state.home.authorPage,
        author_List: state.home.author_List,
        total_count: state.home.total_count,//作者总数
    }
}
const mapDispatchToPros = (dispatch) => {
    return {
        //派发获取文件列表action
        getArticleList(page) {
            dispatch(actionCreators.getArtitleList(page))
        },

        //阅读更多
        readMore(page) {
            var page1 = page+1
            dispatch(actionCreators.getArtitleList(page1))

        },
        //获取作者列表
        getAuthorList(authorPage) {
            dispatch(actionCreators.getAuthorList(authorPage))
        },
        //更换作者列表
        changePage(authorPage,total_count) {
            var totalPage =  Math.ceil(total_count/5)
            if(authorPage+1 < totalPage) {
                dispatch(actionCreators.getAuthorList(authorPage + 1))
            }else {

                dispatch(actionCreators.getAuthorList(0))
            }

        }

    }
}
export default connect(mapStateToProps,mapDispatchToPros)(Home);