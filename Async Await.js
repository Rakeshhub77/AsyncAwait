console.log("person1:show ticket");
console.log("person2:show ticket");

const promiseWifeBringingTickets= new Promise((resolve,reject) =>{
 setTimeout(()=>{
    resolve("ticket")
 },1000)
});
const getPopcorn =promiseWifeBringingTickets.then((ticket) =>{
    console.log("husband:we should go in");
    console.log("wife:no i m hungry")
    console.log("husband: Buy popcorn")
    return new Promise((resolve,reject)=>
resolve("ticket ppopcorn "));
});
const getColddrinks=getPopcorn.then((ticket) =>{
    console.log("wife:need colddrinks")
    console.log("husband:ok let me get for u")
    return new Promise((resolve,reject) =>
    resolve("ticket popcorn colddrinks"));
});

const letMovie= getColddrinks.then((ticket)=>{
    console.log("showing tickets")
    console.log("let in")
return new Promise((resolve,reject) =>
resolve ("person3:show ticket"))
});

letMovie.then((t) => console.log(t));
 
console.log("person4:show ticket"); 
console.log("person5:show ticket");