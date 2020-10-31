import React, { Component } from "react";

class ReadContent extends Component {
    render() {
        console.log("Conetent render");
        return (
            <article>
                <div>{this.props.title}</div>
                <div>{this.props.desc}</div>
            </article>
        );
    }
}

export default ReadContent;
