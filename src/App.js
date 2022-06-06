import Navbar from "./components/Navbar";
import React from "react";
import TextForm from "./components/TextForm";
import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // const removeBodyClasses = () => {
  //   document.body.classList.remove("bg-light");
  //   document.body.classList.remove("bg-dark");
  //   document.body.classList.remove("bg-warning");
  //   document.body.classList.remove("bg-danger");
  //   document.body.classList.remove("bg-success");
  // };

  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    // removeBodyClasses();
    // document.body.classList.add("bg-" + cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2e4666";
      showAlert("Dark mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white ";
      showAlert("Light mode Enabled", "success");
    }
  };

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  return (
    <>
        <Router>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter the text to analyse"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
              />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
              </div>
        </Router>
    </>
  );
}

export default App;
// Define the properties of components done above
