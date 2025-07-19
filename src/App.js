// function based react project 

import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Wheather dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      // document.title ='TextUtils-Light Mode';

      // setInterval(()=>{
      //   document.title = 'TextUtils is Amazing now';
      // },2000)

      //    setInterval(()=>{
      //   document.title = 'Install TextUtils';
      // },3000)
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been enabled", "success");
      // document.title ='TextUtils-Dark Mode';
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" AboutText="About textUtils"/> */}

      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} AboutText="About" ContactText="Contact"/>

        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About  mode={mode}/>} />
            <Route />
            <Route
              path="/textform"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="TextUtils-Words Counter,Character Counter and remove extra spaces"
                  heading1="Your Text Summary"
                  mode={mode}
                />
              }
            />
            <Route />
            <Route path="/contact"element={<Contact mode={mode}/>} />
            <Route />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
