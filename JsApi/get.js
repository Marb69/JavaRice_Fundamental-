import { Card } from "./RenderCard.js";
import { url } from "./url.js";

export function Get() {
  async function fetching() {
    try {
      const res = await fetch(url);

      if (!res.ok) {
        console.log("Something error fetching");

        return;
      }

      const data = await res.json();

   
      Card(data);
      console.log(data)
    } catch (err) {
      console.log(err);
    }
  }

  fetching();
}
