import React, { useState } from "react";

const ReState = () => {
  const [value, setValue] = useState(0);

  const increaseValue = () => {
    setValue(value + 1);
  };

  const decreaseValue = () => {
    setValue(value - 1);
  };

  const resetValue = () => {
    setValue(0);
  };

  return (
    <div className="w-full h-full ">
      <h1 className="text-center pb-10 text-4xl">{value}</h1>
      <div className="w-[100%] h-[100%] flex justify-center items-center space-x-3">
        <button
          type="button"
          onClick={increaseValue}
          className="w-24 bg-yellow-600 p-2 rounded-md"
        >
          Increase
        </button>
        <button
          type="button"
          onClick={decreaseValue}
          className="w-24 bg-green-600 p-2 rounded-md"
        >
          Deccrease
        </button>
        <button
          type="button"
          onClick={resetValue}
          className="w-24 bg-red-600 p-2 rounded-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ReState;
