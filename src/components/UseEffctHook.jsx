import React, { useEffect, useState } from "react";

const UseEffctHook = () => {
  const [value, setValue] = useState({
    sample: "",
  });

  useEffect(() => {
    console.log("UseEffect Calling");
  });

  return (
    <div>
      <h1>Hello User {value.sample}</h1>
      Input Anything Here:
      <input
        type="text"
        name="sample"
        className="p-2 bg-slate-400 rounded-lg"
        onChange={(e) => {
          setValue({
            ...value,
            sample: e.target.value,
          });
        }}
      />
    </div>
  );
};

export default UseEffctHook;
