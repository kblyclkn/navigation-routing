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
        <Button>Buy now!</Button>
      </div>
      <div>
        <Button>See deal!</Button>
      </div>
      <div>
        <Button>Hide ads!</Button>
      </div>
      <div>
        <Button>Ara</Button>
      </div>
      <div>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
