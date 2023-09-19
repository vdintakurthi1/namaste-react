import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  const CountIncrease = () => {
    setCount(count + 2);
  };

  return (
    <div className="user-card">
      <button onClick={CountIncrease}>Updated Count</button>
      <div>count : {count}</div>
      <div>Name: {name}</div>
      <div>Location: {location} </div>
    </div>
  );
};

export default User;
