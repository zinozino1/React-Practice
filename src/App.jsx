import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Subject from "./components/subject";
import Nav from "./components/nav";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: { title: "WEB SUB1", desc: "FUcking s" },
            contents: [
                { id: 1, title: "HTML", desc: "HTML is hyper...." },
                { id: 2, title: "CSS", desc: "CSS is hyper...." },
                { id: 3, title: "JS", desc: "JS is hyper...." },
            ],
        };
    }
    render() {
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    desc={this.state.subject.desc}
                ></Subject>
                <Subject title="Sub2" desc="sub2입니다."></Subject>
                <Nav data={this.state.contents}></Nav>
            </div>
        );
    }
}

export default App;
