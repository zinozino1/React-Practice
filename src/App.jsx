import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Subject from "./components/subject";
import Nav from "./components/nav";
import Content from "./components/content";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "welcome",
            welcome: { title: "welcome", desc: "hello react" },
            subject: { title: "WEB SUB1", desc: "FUcking s" }, // Subject에 보낼 state
            contents: [
                // Content에 보낼 state
                { id: 1, title: "HTML", desc: "HTML is hyper...." },
                { id: 2, title: "CSS", desc: "CSS is hyper...." },
                { id: 3, title: "JS", desc: "JS is hyper...." },
            ],
        };
    }
    render() {
        console.log("App render");
        console.log(this);
        let _title,
            _desc = "s";
        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === "read") {
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }
        return (
            <div className="App">
                {/* <Subject
                    title={this.state.subject.title}
                    desc={this.state.subject.desc}
                ></Subject> */}
                <header>
                    <h1>
                        <a
                            href="/"
                            onClick={function (event) {
                                event.preventDefault();
                                alert(this.state.mode);
                                this.state.mode = "read"; // 이건 불가능. react와의 약속
                                this.setState({ mode: "read" });
                            }.bind(this)}
                        >
                            {this.state.subject.title}
                        </a>
                    </h1>
                    {this.state.subject.desc}
                </header>
                <Nav data={this.state.contents}></Nav>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;
