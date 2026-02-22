import { api } from "./axios";




 const getUser = ()=> api.get("/carts/user");



 export async function  fetchUser(params) {
    
     const res = await getUser();
     const data = res.data;
 }

