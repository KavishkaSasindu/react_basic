import React from "react";
import { useState } from "react";

const Formvalues = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [numValue, setNumValue] = useState({
    number1: "",
    number2: "",
  });

  const chanageState = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New form data");
    console.log(formData.name, formData.password);
  };

  const submitValue = (e) => {
    e.preventDefault();
    console.log(numValue);
    const sum = parseInt(numValue.number1) + parseInt(numValue.number2);
    console.log(sum);
  };

  return (
    <div className="flex justify-center item-center mt-20">
      <div>
        <form onSubmit={handleSubmit} className="space-y-5">
          Username:
          <input
            type="text"
            className="p-2 border rounded-md"
            name="name"
            onChange={chanageState}
          />
          <br />
          Password:
          <input
            type="password"
            className="p-2 border rounded-md"
            name="password"
            onChange={chanageState}
          />
          <br />
          <button
            className="p-2 rounded-md bg-black text-white hover:bg-white hover:text-black"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <form onSubmit={submitValue}>
          Enter one number:
          <input
            type="text"
            name="number1"
            onChange={(e) =>
              setNumValue({
                ...numValue,
                number1: e.target.value,
              })
            }
          />
          <br />
          Enter number 2:
          <input
            type="text"
            name="number2"
            onChange={(e) =>
              setNumValue({
                ...numValue,
                number2: e.target.value,
              })
            }
          />
          <br />
          <button type="submit">Addition</button>
        </form>
      </div>
    </div>
  );
};

export default Formvalues;
