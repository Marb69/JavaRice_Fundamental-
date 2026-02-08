


export async function dataStore(data){


   
     data.forEach((item) => {

      
        async function  fetchdata() {

          try{

              const res = await fetch(item.url)

              if(!res.ok) console.log('Network err');


              const data = await res.json();
    
               
        
          }catch(err){

            console.log(err)
          }


          

            
        }


        
      
       

        fetchdata();
        
        
        
     });
}