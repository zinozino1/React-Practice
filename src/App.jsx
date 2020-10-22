import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Subject from "./components/subject";
import Nav from "./components/nav";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Subject title="Sub1" desc="sub1입니다."></Subject>
                <Subject title="Sub2" desc="sub2입니다."></Subject>
                <Nav id="fuck"></Nav>
            </div>
        );
    }
}

export default App;
