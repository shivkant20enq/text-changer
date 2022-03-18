import React, { useState } from "react";

const Textutil = (props) => {
  const [text, setString] = useState("");
  const [len, setLen] = useState(0);
  const [upper, setUpper] = useState("");
  const [lower, setLower] = useState("");

  const copyHandler = () => {
    // console.log("hiii");
    var copy = document.getElementById("mybox");
    copy.select();
    navigator.clipboard.writeText(copy.value);
    // console.log(copy.value);
  };

  const resetHandler = () => {
    // console.log("hiii");
    setString("");
    setLen(0);
    setUpper("");
    setLower("");
    document.getElementById("mybox").value = "";
  };

  return (
    <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
      <h4>Enter string : </h4>
      <textarea
        className="inp"
        type="text"
        id="mybox"
        onChange={(e) => setString(e.target.value)}
      ></textarea>

      <p className="space">Text : {text}</p>
      <p>Length : {len}</p>
      <p>Upper :{upper} </p>
      <p>Lower :{lower} </p>

      <button onClick={() => setLen(text.length)}>LENGTH</button>

      <button onClick={() => setUpper(text.toUpperCase())}>UPPER</button>

      <button onClick={() => setLower(text.toLowerCase())}>LOWER</button>

      <button onClick={() => copyHandler()}>COPY</button>

      <button onClick={() => resetHandler()}>RESET</button>
    </div>
  );
};

export default Textutil;
