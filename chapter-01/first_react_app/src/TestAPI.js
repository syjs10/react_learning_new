import React, {Component} from 'react';

class TestAPI extends Component {
    constructor(props) {
      super(...arguments);
      this.state = {article : null};
    }

    componentDidMount() {
        const apiUrl = "../restful/articles/7";
        fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status' + response.status);
            }
            console.log(response.json());
            response.json().then((responseJson) => {
                this.setState({article:responseJson.article});
            }).catch((error)=>{
                this.setState({article:null});
            });
        }).catch((error)=>{
            this.setState({article:null});
        });
    }

    render() {
        if (!this.state.article) {
            return <div>暂无数据</div>;
        }
        const {title, content} = this.state.article;
        return (
            <div>
                标题: {title}<br />内容: {content}
            </div>
        );
    }
}
export default TestAPI;