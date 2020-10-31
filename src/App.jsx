import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Subject from "./components/subject";
import Nav from "./components/nav";
import ReadContent from "./components/readContent";
import CreateContent from "./components/createContent";
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
            _desc,
            _article = null;
        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
        } else if (this.state.mode === "read") {
            this.state.contents.forEach(
                function (v) {
                    if (v.id === this.state.selected_content_id) {
                        _title = v.title;
                        _desc = v.desc;
                    }
                }.bind(this),
            );
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
        } else if (this.state.mode === "create") {
            _article = (
                <CreateContent
                    title={_title}
                    desc={_desc}
                    onSubmit={() => {
                        this.setState();
                    }}
                ></CreateContent>
            );
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

                {_article}
            </div>
        );
    }
}

export default App;
