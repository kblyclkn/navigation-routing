import React from "react";
import { GoBell, GoAlert, GoDatabase, GoCloudDownload } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button onClick={handleClick} className="mb-5" outline rounded>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger>
          <GoAlert />
          Buy now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See deal!
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudDownload />
          Hide ads!
        </Button>
      </div>
      <div>
        <Button primary>Search</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
