export function render(name,abilities){

     

       


       cardsWrapper.innerHTML = '';

       name.forEach((poke) => {
        

            cardsWrapper.innerHTML += `
            

                 <div class="px-5.5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">

            <div class="p-3 bg-amber-100 rounded-2xl">


                <img src="${poke.img}"
                    alt="" class="w-full rounded-2xl">

                <span class="flex gap-1 px-3 py-2  my-2 font-medium text-gray-900 text-3xl">

                    <p>${poke.name}</p>
                    
                          <p></p>
                </span>

            </div>


        </div>
            `;
       });
}