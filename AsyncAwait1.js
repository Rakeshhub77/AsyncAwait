console.log("person1:show ticket");
console.log("person2:show ticket");

const premovie = async() =>{
    const promiseWifeBringingTickets =new Promise((resolve,reject) =>
    resolve("person3:show ticket")
   );
   const getPopcorn=new Promise((resolve,reject)=> resolve("popcorn"));
   const getColddrinks=new Promise((resolve,reject)=>resolve("colddrinks"))
   const letMovie=new Promise((resolve,reject)=>resolve("ticket"))

    let bringTicket= await promiseWifeBringingTickets;
    console.log("husband:we should go in");
    console.log("wife:no i m hungry")
    console.log("husband: Buy popcorn")
    let popcorn = await getPopcorn
    console.log("wife:need colddrinks")
    console.log("husband:ok let me get for u")
    let colddrinks=await getColddrinks
    console.log("showing tickets")
    console.log("let in")
    let ticket =await letMovie;

    return bringTicket;
    
}

premovie().then((m) => console.log(m));

console.log("person4:show ticket");
console.log("person5:show ticket");