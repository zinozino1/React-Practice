import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Subject from "./components/subject";
import Nav from "./components/nav";
import Content from "./components/content";
import Controll from "./components/controll";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: "welcome",
            selected_content_id: 0,
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
            _desc = "";
        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === "read") {
            this.state.contents.forEach(
                function (v) {
                    if (v.id === this.state.selected_content_id) {
                        _title = v.title;
                        _desc = v.desc;
                    }
                }.bind(this),
            );
            // _title = this.state.contents[0].title;
            // _desc = this.state.contents[0].desc;
        }
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    desc={this.state.subject.desc}
                    onChangePage={function (e) {
                        e.preventDefault();
                        alert(this.state.selected_content_id);
                    }.bind(this)}
                ></Subject>
                <Nav
                    data={this.state.contents}
                    onChangePage={(content) => {
                        this.setState({
                            mode: "read",
                            selected_content_id: content.id,
                        });
                    }}
                ></Nav>
                <Controll
                    onChangeMode={(mode) => {
                        this.setState({ mode: mode });
                    }}
                ></Controll>
                <Content title={_title} desc={_desc}></Content>
            </div>
        );
    }
}

export default App;
