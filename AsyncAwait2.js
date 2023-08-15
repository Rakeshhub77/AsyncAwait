console.log("person1:show ticket");
console.log("person2:show ticket");

const preMovie= async() =>{
    const promiseWifeBringingTickets=new Promise((resolve,reject)=>
    resolve("person3: show ticket"));

    const getPopcorn=new Promise((resolve,reject)=> resolve('get Popcorn with butter'));
    const getColddrinks=new Promise((resolve,reject)=> resolve('coldDrinks'));
    const getSweet=new Promise((resolve,reject)=> resolve('sweet & Enjoyyyy'));
    const inTohall=new Promise((resolve,reject)=> resolve('Enter'))

let ticket=await promiseWifeBringingTickets;
let [a,b,c,d]=await Promise.all([getPopcorn,getColddrinks,getSweet,inTohall])

console.log(a,b,c,d)
return ticket;
}

preMovie().then((m)=> console.log(m));


console.log("person4:show ticket");
console.log("person5:show ticket");