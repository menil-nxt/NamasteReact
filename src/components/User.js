import { useState } from "react";
const User = (props) => {
  const count = useState("1");
  const { name, location, contact } = props;
  console.log(props);

  return (
    <div>
      <h1>count: {count}</h1>
      <h1>name: {name}</h1>
      <h2>Location: {location}</h2>
      <h2>Contact no: {contact}</h2>
    </div>
  );
};

export default User;
