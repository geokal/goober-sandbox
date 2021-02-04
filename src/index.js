import React from "react";
import ReactDOM from "react-dom";
import { styled, setPragma, glob } from "goober";

setPragma(React.createElement);

glob`
  :root {
    --primary-color: maroon;
    --primary-hover: red;
  }
  body {
    margin: 0;
  }
`;

const Title = styled("h1")`
  font-weight: ${props => props.weight};
  color: var(--primary-color);

  &:hover {
    color: var(--primary-hover);
  }
`;

const LargeTitle = styled(Title)`
  font-size: 4rem;
`;

function App() {
  return (
    <div className="App">
      <LargeTitle weight="bold">Hello CodeSandbox</LargeTitle>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
