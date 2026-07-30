import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "Gujarat",
      },
    };
  }

  async componentDidMount() {}

  componentDidUpdate() {
    console.log("Component Did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div>
        <img src={avatar_url} className="git-data-img"></img>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
      </div>
    );
  }
}

export default UserClass;
