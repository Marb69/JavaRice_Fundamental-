import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "../components/MainLayout";
import Home from "../Pages/Home";
import Login from "../Auth/Page/Login";


export const route = createBrowserRouter(
  createRoutesFromElements(
   

    <Route path="/" element={<Login/>}>

         

    </Route>
  ),
);
