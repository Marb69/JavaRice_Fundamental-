import { card } from "../util/card.js";
import { addcard } from "../constructor/addcard.js";

export function dashboardService() {
  let Services = [
    {
      Title: "Understand Everything",
      SubTitle: "Let learn with us to improve your Skill",
    },
    {
      Title: "Understand Everything",
      SubTitle: "Let learn with us to improve your Skill",
    },
    {
      Title: "Understand Everything",
      SubTitle: "Let learn with us to improve your Skill",
    },
    {
      Title: "Understand Everything",
      SubTitle: "Let learn with us to improve your Skill",
    },
  ];

  Services.forEach((item) => {
    card(item.Title, item.SubTitle);
  });
}
