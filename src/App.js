import React from "react";
import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click me!
        </Button>
      </div>
      <div>
        <Button danger>Buy now!</Button>
      </div>
      <div>
        <Button warning >See deal!</Button>
      </div>
      <div>
        <Button secondary>Hide ads!</Button>
      </div>
      <div>
        <Button primary rounded>Ara</Button>
      </div>
    </div>
  );
}

export default App;
