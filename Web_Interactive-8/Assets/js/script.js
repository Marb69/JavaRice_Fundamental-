


async function GetUser(params) {
    

    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if(!response.ok){

        console.log('Failed to Fetch Data');
        return;
    }

    const data = await response.json();
    const tablebody = document.querySelector('#tableBody');
    
    tablebody.innerHTML = '';

    const fragment = document.createDocumentFragment();

    data.forEach(({id,name,email,username}) => {
        

        const row = document.createElement('tr');
        
        


        row.innerHTML = `
                    <td>${id}</td>
                    <td>${name}</td>
                    <td>${email}</td>
                    <td>${username}</td>
                        `

                        fragment.appendChild(row);
    });
    
    tablebody.appendChild(fragment);
        
    } catch (error) {
        console.log(error);
    }
}

GetUser();
  
