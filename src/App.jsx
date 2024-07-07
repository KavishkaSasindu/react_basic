import React, { useEffect, useState } from "react";
import User from "./components/User";
import Main from "./components/Main";
import MyData from "./components/MyData";
import ReState from "./components/ReState";

const App = () => {
  const [state, setState] = useState({
    name: "kavishka Sasindu",
    job: "DevOps Engineer",
    hometown: "Minuwangoda",
  });

  const [data, setNewData] = useState([state]);

  const handleClick = () => {
    setState({
      ...state,
      name: "Malindu Duwage",
      job: "Network Engineer",
      hometown: "Kaluthara",
    });

    setNewData([
      ...data,
      {
        name: "Manujaya",
        job: "database developer",
        hometown: "Kandy",
        image:
          "https://imgs.search.brave.com/j73ybex5YqMtbfKDpKdehwaF34K7XjCPl6BZV9tSjkw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/Njk3MDY5NzEzMDYt/ZGU1ZDc4ZjY0MThl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRSOGZH/eGhaMjl6ZkdWdWZE/QjhmREI4Zkh3dw.jpeg",
      },
    ]);
  };

  console.log(state);
  console.log(data);

  const handleSubmit = () => {
    console.log("Submitted the values");
  };

  useEffect(() => {
    handleSubmit();
  });

  return (
    <div>
      <h1>{state.name}</h1>
      <h1>{state.job}</h1>
      <h1>{state.hometown}</h1>

      <div className="w-[100%] h-2 bg-yellow-200"></div>

      <div className="grid grid-rows-1 grid-cols-4">
        {data?.map((user, index) => (
          <div key={index} className="p-2 border-gray-500 rounded-md">
            <h1>{user.name}</h1>
            <img src={user.image ? user.image : "image"} alt="image-card" />
            <p>{user.hometown}</p>
            <p>{user.job}</p>
          </div>
        ))}
      </div>
      <button
        className="w-20 h-16 p-2 hover:bg-black hover:text-white bg-gray-300 border-none"
        onClick={handleClick}
      >
        Click Me
      </button>

      <hr />
      <hr />

      <form onSubmit={handleSubmit}>
        Username :
        <input type="text" placeholder="Kavishka" />
        <br />
        Password :
        <input type="password" placeholder="********" />
        <button type="submit">Submit</button>
      </form>

      <hr />
      <hr />
      <ReState />
    </div>
  );
};

export default App;
