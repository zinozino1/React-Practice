import React, { Component } from "react";

class Nav extends Component {
    shouldComponentUpdate(newProps, newState) {
        console.log("nav should render");
        return newProps.data !== this.props.data;
    }
    render() {
        console.log("nav render");
        const lists = [];
        const data = this.props.data;
        for (let i = 0; i < data.length; i++) {
            lists.push(
                <li key={data[i].id}>
                    <a
                        href={"/content/" + data[i].id}
                        onClick={(e) => {
                            e.preventDefault();
                            this.props.onChangePage(data[i]);
                        }}
                    >
                        {data[i].title}
                    </a>
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
