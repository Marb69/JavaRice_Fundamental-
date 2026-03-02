import RenderAbout from "./about.js";
import RenderBlog from "./blog.js";
import RenderCoffee from "./coffee.js";
import RenderHome from "./home.js";
import layout from "./layout.js";

const Route = () => {
  const hash = location.hash;

  if (hash === "#") {
    layout(RenderHome());
  } else if (hash === "#Coffee") {
    layout(RenderCoffee());
  } else if (hash === "#Blog") {
    layout(RenderBlog());
  } else if (hash === "#About") {
    layout(RenderAbout());
  } else {
    layout(RenderHome());
  }
};

export default Route;
