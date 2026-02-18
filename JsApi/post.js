import { url } from "./url.js";

export function Post(id,title,price,des,cate,image) {
  async function fetching() {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
          title: title,
          price: price,
          description: des,
          category: cate,
          image: image,
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
