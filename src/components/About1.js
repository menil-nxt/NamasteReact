import React from "react";
import { href, Route } from "react-router";
import Body from "./Body.js";
import User from "./User.js";
import UserClass from "./UserClass.js";
import { Link } from "react-router";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent componentDidMount");
  }

  render() {
    console.log("parent render called");

    return (
      <div>
        <h1>About Class component</h1>
        <h2>this is Food oderring app</h2>
        <UserClass name={"first"} />
      </div>
    );
  }
}

export default About;
