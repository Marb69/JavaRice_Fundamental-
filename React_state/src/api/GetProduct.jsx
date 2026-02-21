import { api } from "./axios";

export const getProduct = ()=> api.get('/products');
