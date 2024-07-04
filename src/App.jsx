import React from "react";
import User from "./components/User";

const App = () => {
  const myData = [
    {
      name: "Kavishka",
      age: "24",
      position: "DevOps Engineer",
    },
    {
      name: "Kapila",
      age: "23",
      position: "Web Developer",
    },
    {
      name: "Manuja",
      age: "23",
      position: "Fullstack developer",
    },
    {
      name: "Malindu",
      age: "24",
      position: "Network Engineer",
    },
  ];

  return (
    <div className="flex">
      {myData?.map((user) => {
        return (
          <div key={user.name}>
            <User name={user.name} age={user.age} position={user.position} />
          </div>
        );
      })}
    </div>
  );
};

export default App;
