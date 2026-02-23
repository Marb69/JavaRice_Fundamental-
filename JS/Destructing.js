export const Distructing = ()=>{

    

    const user = {

          name:'Jajjs',
          age:19,
          role:'student'
    }

    const array = [1,2,3,4,5]


    const [a,b,c,d,e] = array;


    console.log(a)


    const {name,age,role}= user;

 

     console.log(name);
}