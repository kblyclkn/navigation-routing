import React from "react";
import { GoBell, GoAlert, GoDatabase, GoCloudDownload } from "react-icons/go";
import Accordion from "../components/Accordion";

function AccordionPages() {
  const items = [
    {
      id: "alyn98ck",
      label: "Can I use React on a project?",
      content:
        "You can use react on any project you want. You can use react on any project you want. You can use react on any project you want. You can use react on any project you want",
    },
    {
      id: "kbly95clkn",
      label: "Can I use JavaScript on a project?",
      content:
        "You can use react on any project you want. You can use react on any project you want. You can use react on any project you want. You can use react on any project you want",
    },
    {
      id: "ırm98dry",
      label: "Can I use CSS on a project?",
      content:
        "You can use react on any project you want. You can use react on any project you want. You can use react on any project you want. You can use react on any project you want",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPages;
