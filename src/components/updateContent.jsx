import React, { Component } from "react";

class UpdateContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // props는 readonly이므로 state로 바꿔준다?
            // state는 변경 가능하니까
            title: this.props.data.title,
            desc: this.props.data.desc,
        };
    }
    inputFormHandler(name, value) {
        if (name === "title") {
            this.setState({ title: value });
        } else if (name === "desc") {
            this.setState({ desc: value });
        }
    }
    render() {
        console.log("Conetent render");
        return (
            <article>
                <h2>Update</h2>
                <form
                    id="create-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        // 최종적으로 변경된 state를 app컴포넌트로 전달
                        this.props.onSubmit(this.state.title, this.state.desc);
                    }}
                    action="/create_process"
                    method="post"
                >
                    {" "}
                    <p>--> {this.state.title}</p>
                    <p>
                        <input
                            type="text"
                            name="title"
                            placeholder="title"
                            value={this.state.title}
                            onChange={(e) => {
                                this.inputFormHandler(
                                    // input값 변경될 때마다 update컴포넌트의 state변경됨.
                                    e.target.name,
                                    e.target.value,
                                );
                            }}
                        />
                    </p>
                    <p>
                        <textarea
                            name="desc"
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="description"
                            form="create-form"
                            value={this.state.desc}
                            onChange={(e) => {
                                this.inputFormHandler(
                                    e.target.name,
                                    e.target.value,
                                );
                            }}
                        ></textarea>
                    </p>
                    <p>
                        <input type="submit" value="등록" />
                    </p>
                </form>
            </article>
        );
    }
}

export default UpdateContent;
