import { url } from "./url.js";

export function Delete() {
  async function DeleteData(params) {
    try {
      const res = await fetch(`${url}/1`, {
        method: "DELETE",
      });

      if (!res.ok) {
        console.log("something error");
        return;
      }

      const data = await res.json();

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  DeleteData();
}
