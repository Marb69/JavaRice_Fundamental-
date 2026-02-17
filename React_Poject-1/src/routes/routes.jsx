import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Skill from "../pages/Skill";
import About from "../pages/About";
import Gallery from "../pages/Gallery";

export const router = createBrowserRouter(


      createRoutesFromElements( 

              <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="skill" element={<Skill/>}/>
                    <Route path="about" element={<About/>}/>
                     <Route path="gallery" element={<Gallery/>}/>
                 
              </Route>
      )
)