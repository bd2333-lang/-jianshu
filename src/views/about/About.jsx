import   React,{Component} from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
class About extends Component {
    state = {
        list: [
            {
                id: 0,
                title: '新闻需求1'
            },
            {
                id: 1,
                title: '新闻需求2'
            },
            {
                id: 2,
                title: '新闻需求3'
            },
            {
                id: 3,
                title: '新闻需求4'
            }
        ]
    }
    render() {
        return (
            <div>
                <h1>About组件</h1>
                <div>-----------------------------</div>
                {
                //     this.state.list.map((val,key) =>  {
                //         return (
                // <li key={key}><Link to={`/content/${val.id}`}>{val.title}</Link></li>
                //         )
                //     })
                }
                {
                    this.state.list.map((val,key) =>  {
                        return (
                <li key={key}><Link to={`/content/?id=${val.id}`}>{val.title}</Link></li>
                        )
                    }) 
                }

            </div>
        );
    }
}

export default About;