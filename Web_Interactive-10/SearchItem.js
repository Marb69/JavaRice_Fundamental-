let arry = [


  {

    id:1,
    item:"Mangga"
  }
   
]

arry.push({

   id:2,
   item:'Apple'
})


arry.push({

   id:3,
   item:'Tao'
})



let updated = arry.filter(item=>item.id !== 1);






localStorage.setItem('task',JSON.stringify(updated));


console.log(JSON.parse(localStorage.getItem('task')) || [])