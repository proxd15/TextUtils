import React, { useState } from "react";

export default function TextForm(props) {

  const HandleUpClick = () => {
    // console.log("Uppercase clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to uppercase","success");
  };

  const HandleLoClick = () => {
    // console.log("Uppercase clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lowercase","success");
  };
 
  const HandleClear = () => {
    // console.log("Uppercase clicked");
    let newText = '';
    setText(newText);
  };

  const HandleUpChange = (event) => {
    console.log("Pressed");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3" style={{color: props.mode==='light'?'black':'white'}} >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control my-3"
          onChange={HandleUpChange}
          value={text}
          id="mybox"
          rows="8"
          style={{backgroundColor: props.mode==='light'?'white':'grey' , color: props.mode==='light'?'black':'white'}}
        ></textarea>
        <button className="btn btn-primary" onClick={HandleUpClick} >
          Uppercase Letters
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleLoClick} >
          Lowercase Letters
        </button>
        <button className="btn btn-primary mx-2" onClick={HandleClear} >
          Clear Text
        </button>
      </div>
       <div className="container" style={{color: props.mode==='light'?'black':'white'}} >
      <h2>Your Text Summary</h2>
      <p>{text.length} characters</p>
      <p>Number of Words - {text.split(" ").filter((element)=>{ return element.length !== 0}).length}</p>
      <h2>Preview</h2>
      <p>{text}</p>
      </div>
    </>
  );
}
