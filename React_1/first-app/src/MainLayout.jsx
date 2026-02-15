import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Recipe from "./Recipe";
import PhFood from "./PhFood";
import Gallery from "./Gallery";
import About from "./About";


const MainLayout = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/PhFood" element={<PhFood />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<About />} />
        </Route>
      </Route>,
    ),
  );
  return (
    <main>
      <RouterProvider router={router} />
    
    </main>
  );
};

export default MainLayout;
