import   React,{Component} from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import url from 'url';
class Content extends Component {
    state = {  }
    componentDidMount() {
        // console.log(url.parse(this.props.location.search,true))
        let urlId =  url.parse(this.props.location.search,true).query.id;
        console.log(urlId)
    }
    render() {
        return (
            <div>新闻  详情</div>
        );
    }
}

export default Content;