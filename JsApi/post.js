import { url } from "./url.js";

export function Post() {
  async function fetching() {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Hello Api",
          id: 102,
        }),
      });

      if (!res.ok) {
        console.log("error in fetching");
        return;
      }

      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  fetching();
}
