import React from "react";
import logo from "./logo.svg";
/* import './App.css';
 */
function App() {
  const ReactElement = React.createElement(
    "h1",
    { style: { color: "red" } },
    React.createElement("div", null, "Hello React 22")
  );
  return ReactElement;
}

export default App;



