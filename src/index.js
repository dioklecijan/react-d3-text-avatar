import React from "react";
import { render } from "react-dom";
import Avatar from "./Avatar";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Avatar r={32} text="AB" bgColor="#39B" />
  </div>
);

render(<App />, document.getElementById("root"));
