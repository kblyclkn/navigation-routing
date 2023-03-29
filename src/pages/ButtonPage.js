import React from "react";
import { GoBell, GoAlert, GoDatabase, GoCloudDownload } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div>
      <div>
        <Button onClick={handleClick} className="mb-5" success rounded outline>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoAlert />
          Buy now!
        </Button>
      </div>
      <div>
        <Button warning outline>
          <GoDatabase />
          See deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCloudDownload />
          Hide ads!
        </Button>
      </div>
      <div>
        <Button primary outline>
          Search
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
