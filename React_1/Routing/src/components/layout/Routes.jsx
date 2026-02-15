import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import User from "../../pages/User";
import Dashboard from "../../pages/Dashboard";
import AddPeople from "../../pages/AddPeople";
import Main from "./Main";
import ErrorPage from "../../pages/ErrorPage";


const Routes = () => {


  const router = createBrowserRouter(

    
    createRoutesFromElements(
      <Route path="/" element={<Main/>}  errorElement={<ErrorPage />}>
        <Route index element={<Dashboard/>} />
        <Route path="User" element={<User/>} />
        <Route path="Addpeople" element={<AddPeople/>} />
      </Route>,
    ),
  );


  
  return (
 
      <RouterProvider router={router} />

  );
};

export default Routes;
