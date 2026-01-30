// this object is helpful in giving attributes  to the element id, etc
    /// ("tagName", {id:"myId"}, content)
const parent = React.createElement("div",{id:"parent"},
  [  React.createElement("div", {id:"child"},
        // if we want to create two child elements  then we have to pass them in an array.
        React.createElement("h1",{}, "hello from the child 1 " )
    ),
  React.createElement("div", {id:"child"},
        // if we want to create two child elements  then we have to pass them in an array.
        React.createElement("h1",{}, "hello from the child 1 " )
    )]
)
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);