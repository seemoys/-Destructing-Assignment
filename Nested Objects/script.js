const person={
    name:"Seemoy",
    age:28,
    address:{
        street:"B8, Block B, Industrial Area.",
        city: "Sector 62, Noida",
        state: "Uttar Pradesh"
    }
};

function extractElement({name,address:{street}}){
   return {name,street};
}
let result=extractElement(person);
console.log(result)
