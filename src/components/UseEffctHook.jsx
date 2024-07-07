import React, { useEffect, useState } from "react";

const UseEffctHook = () => {
  useEffect(() => {
    console.log("UseEffect Calling");
  });

  return (
    <div>
      <h1>Hello User</h1>
    </div>
  );
};

export default UseEffctHook;
