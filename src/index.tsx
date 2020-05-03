import React from "react";
import ReactDOM from "react-dom";

const App = (): JSX.Element => {
  return <h1>Hello React TypeScript</h1>;
};

export default App;

const root = document.getElementById("app-root");
ReactDOM.render(<App />, root);
