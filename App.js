import React  from "react";
import ReactDOM from "react-dom/client";
// this object is helpful in giving attributes  to the element id, etc
    /// ("tagName", {id:"myId"}, content)
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    // each child element should have a uniques key componenet
    React.createElement(
      "div",
      { id: "child", key: "child1" },
      React.createElement("h1", {}, "hello from the child 1")
    ),
    React.createElement(
      "div",
      { id: "child", key: "child2" },
      React.createElement("h1", {}, "hello from the child 2")
    )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);