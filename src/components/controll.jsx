import React, { Component } from "react";

class Controll extends Component {
    shouldComponentUpdate(newProps, newState) {
        console.log("controll shoud renderr");
        return newProps.data !== this.props.state;
    }
    render() {
        console.log("Controll Render");
        return (
            <ul>
                <li>
                    <a
                        href="/create"
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onChangeMode("create");
                        }}
                    >
                        Create
                    </a>
                </li>
                <li>
                    <a
                        href="/Update"
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onChangeMode("update");
                        }}
                    >
                        Update
                    </a>
                </li>
                <li>
                    <input
                        type="button"
                        value="Delete"
                        onClick={() => {
                            this.props.onChangeMode("delete");
                        }}
                    />
                </li>
            </ul>
        );
    }
}

export default Controll;
