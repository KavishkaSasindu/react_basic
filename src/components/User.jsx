import React from "react";

const User = ({ name, age, position }) => {
  return (
    <div className="w-[300px] h-[300px] flex justify-center items-center">
      <div className="w-[250px] h-[250px] bg-yellow-50 flex justify-center items-center">
        <div>
          <h1 className="text-center">{name}</h1>
          <p className="text-center">{age}</p>
          <p className="text-center">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
