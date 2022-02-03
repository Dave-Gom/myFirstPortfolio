import logo from "./logo.svg";
import "./App.css";

// import NavBar2 from "./components/NavOption2/Header";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./components/pages/Home";
// import Contact from "./components/pages/Contact";
// import About from "./components/pages/About";

import Contents from "./components/Contents";

function App() {
  return (
    <div className="App">
      <Contents />
    </div>
  );
}

export default App;

{
  /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */
}
