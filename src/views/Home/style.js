import styled from 'styled-components'

export const HeaderPager = styled.div`
    margin: 0 auto;
    width: 960px;
    padding-top: 20px;
    padding-left: 15px;
    .banner-img {
        width: 640px;
        height: 300px;
    }
    overflow: hidden;
`
export const HomeLeft = styled.div`
    margin: 0 auto;
    width: 625px;
    float: left;
`
export const HomeRight = styled.div`
    margin: 0 auto;
    width: 280px;
    float: right;
    img {
        width: 100%;
        margin-bottom: 6px;
        border-radius: 5px;
    }
    .downApp {
        width: 100%;
        box-shadow: 0 0 2px rgba(0,1,3,.2);
        margin-top: 20px;
        height: 80px;
        border-radius: 5px;
        border: 1px solid #dcdcdc;
        overflow: hidden;
        padding: 10px 14px;
        img {
            float: left;
            display: inline-block;
            width: 60px;
            vertical: middle;
            height: 60px;
            margin-right: 10px;
        }
        span:nth-first  {
            line-height: 15px;
        }
        div {
            margin-top: 10px;
        }
    }
    
`
export const ArtitleList = styled.div`
    margin-top: 15px;
    padding-bottom: 25px;
    border-bottom: 1px solid #dcdcdc;
    height: 120px;
    h2 {
        font-weight: 900;
        line-height: 20px;
        cursor: pointer;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
        line-height: 30px;
    }
    p {
        color:#999;
        line-height: 20px;
        font-size: 13px;
        display: -webkit-box;
         overflow: hidden;
         text-overflow: ellipsis;
         word-wrap: break-word;
         white-space: normal !important;
         -webkit-line-clamp: 2;
         -webkit-box-orient: vertical;
`
export const ListBottom = styled.div`
    line-height: 20px;
    height: 20px;
    margin-top: 10px;
    margin-right: 10px;
    color: #999;
    .author {
        margin-right: 12px;
    }
    .commment {
        margin-right: 12px;
    }
    .dianzan {
        margin-left: 10px;
    }
    
`
export const Recommend = styled.div`
    width: 100%;
    magrgin-top: 30px;
    
`
export const RecommendTitle = styled.div`
   font-size: 14px;
   margin-top: 20px;
   margin-bottom: 15px;
   line-height: 20px;
   overflow: hidden;
   color: #969696;
`
export const RecommendSwitch  = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    cursor:pointer;
    .spin {
        font-size: 12px;
        margin-top: 22x;
        margin-right: 12px;
        transition: all .2s ease-out;
        transform: rotate(0deg);
        transform-orgin: center center;
    }
`
export const RecommendList = styled.div`
    float:right;
    width: 100%;
    height: 60px;
    margin-bottom: 15px;
    .headPic {
        width: 46px;
        height: 46px;
        float: left;
        margin-right: 10px;
        display: inline-block;
        border-radius: 23px;
    }
    div {
        margin-top: 3px;
        .focus {
            color: #42c02e;
            line-height: 0px;
            cursor: pointer;
            float: right;
            font-szie: 15px;
            .add {
                font-weight: bold;
            }
        }
    }
    
`
//阅读更多
export const ButtonPart = styled.div`
    padding: 20px 0px;
    width: 625px;
    .readMore {
        width: 100%;
        border-radius: 30px;
        background: #a5a5a5;
        border: 1px solid #a5a5a5;
        height: 40px;

    }
`


