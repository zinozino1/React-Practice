import React, { Component } from "react";

class Nav extends Component {
    render() {
        console.log("nav render");
        const lists = [];
        const data = this.props.data;
        for (let i = 0; i < data.length; i++) {
            lists.push(
                <li key={data[i].id}>
                    <a href={"/content/" + data[i].id}>{data[i].title}</a>
                </li>,
            );
        }
        return (
            <nav>
                <ul>{lists}</ul>
            </nav>
        );
    }
}

export default Nav;
