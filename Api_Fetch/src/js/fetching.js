import { dataStore } from "./data.js";


export function fetching() {



  async function fetchApi() {


    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");

      if (!res.ok) {
        console.log("Network Error");
        return;
      }

      const data = await res.json();
       

       dataStore(data.results);

    
   } catch (err) {
      console.log("Fetching error");
    }
  }

  fetchApi();
}
