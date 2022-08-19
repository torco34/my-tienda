import React from "react";

const Input = ({ value, setValue }) => {
  console.log(value);
  return (
    <>
      <form className=" m-5">
        <input
          className="form-control"
          list="datalistOptions"
          placeholder=" Search..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </form>
    </>
  );
};

export { Input };
