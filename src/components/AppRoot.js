import React from 'react';
import MarkdownData from "../../data/post.md";

export default class AppRoot extends React.Component {
    constructor(props){
        super(props)
        this.state ={
        }
    }

    render(){
        return(
            <div className="profile">
                <img src={require("../images/1100px-Ser-wiki.png")} />
                <h1>{MarkdownData.title}</h1>
                <h2>{MarkdownData.author}</h2>
                <div className="content" dangerouslySetInnerHTML={{__html:MarkdownData.__content}}></div>
            </div>    
        )
    }
}
