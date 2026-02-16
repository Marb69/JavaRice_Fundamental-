import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Dashboard from "../page/Dashboard";
import User from "../page/User";
import AddPeople from "../page/AddPeople";
import Layout from "../component/Layout";
import Details from "../page/Details";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="user" element={<User />} />
      <Route path="addpeople" element={<AddPeople/>} />
      <Route path="details" element={<Details/>}/>
    </Route>,
  ),
);
