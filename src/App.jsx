import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Subject from "./components/subject";
import Nav from "./components/nav";
import ReadContent from "./components/readContent";
import CreateContent from "./components/createContent";
import UpdateContent from "./components/updateContent";
import Controll from "./components/controll";

class App extends Component {
    constructor(props) {
        super(props);
        this.max_content_id = 3; // state에 넣지 않는다. 불필요한
        this.state = {
            mode: "welcome",
            selected_content_id: 1,
            welcome: { title: "welcome", desc: "hello react" },
            subject: { title: "WEB SUB1", desc: "HELLO " }, // Subject에 보낼 state
            contents: [
                // Content에 보낼 state
                { id: 1, title: "HTML", desc: "HTML is hyper...." },
                { id: 2, title: "CSS", desc: "CSS is cascading...." },
                { id: 3, title: "JS", desc: "JS is javascript...." },
            ],
        };
        this.getcontent = this.getcontent.bind(this);
    }
    getReadContent() {
        let i = 0;
        while (i < this.state.contents.length) {
            let data = this.state.contents[i];
            if (data.id === this.state.selected_content_id) {
                return data;
            }
            i = i + 1;
        }
    }
    getcontent() {
        console.log("App render");

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
                    onSubmit={(title, desc) => {
                        this.max_content_id += 1;
                        const newObj = { id: this.max_content_id, title, desc };
                        const newArr = this.state.contents.concat(newObj); // 여기까지는 state가 바뀐것을 브라우저가 모른다.
                        this.setState({ contents: newArr }); // 여기부터 앎
                    }}
                ></CreateContent>
            );
        } else if (this.state.mode === "update") {
            let _content = this.getReadContent();
            _article = (
                <UpdateContent
                    data={_content}
                    onSubmit={(title, desc) => {
                        let copiedArr = Array.from(this.state.contents);
                        copiedArr[
                            this.state.selected_content_id - 1
                        ].title = title;
                        copiedArr[
                            this.state.selected_content_id - 1
                        ].desc = desc;
                        this.setState({ contents: copiedArr, mode: "read" });
                    }}
                ></UpdateContent>
            );
        }
        return _article;
    }
    render() {
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
                    onDelete={() => {
                        this.max_content_id -= 1;
                        let newArr = this.state.contents.filter((v) => {
                            return v.id !== this.state.selected_content_id;
                        });
                        this.setState({ contents: newArr, mode: "welcome" });
                        // let copiedArr = Array.from(this.state.contents);
                        // let spliceArr = copiedArr.splice(
                        //     this.state.selected_content_id - 1,
                        //     1,
                        // );
                        // this.setState({ contents: spliceArr });
                    }}
                ></Controll>

                {this.getcontent()}
            </div>
        );
    }
}

export default App;
