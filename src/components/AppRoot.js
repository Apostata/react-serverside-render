import React from 'react';
//import MarkdownData from "../../data/post.md";

export default class AppRoot extends React.Component {
    constructor(props){
        super(props)
        this.state ={
        }
    }

    render(){
        return(
            <div className="profile">
                <img src={""} />
                <h1>{"Title"}</h1>
                <h2>{"autor"}</h2>
                <div className="content" dangerouslySetInnerHTML={{__html:"<h1>Heading</h1>"}}></div>
            </div>    
        )
    }
}
