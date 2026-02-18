import { url } from "./url.js";

export function Put() {
  async function put() {
    try {
      const res = await fetch(`${url}/1`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 1,
          title: "Updated Title",
          body: "This is the updated body content.",
          userId: 1,
        }),
      });

      if (!res.ok) {
        console.log("somethimg error in api");

        return;
      }

      const data = await res.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  put();
}
