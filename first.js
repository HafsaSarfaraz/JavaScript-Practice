// let name= "Hafsa";
// console.log(name);

// var name="Hafsa";

// function myname(){
//     let a=5;
//     // console.log(a);
//     if(a<10){
//         // console.log(a)
//         var b=6;
//         console.log(b);
//     }
//     console.log(b);
// }

// myname();
// let age=18;
// let ages= age>=18?"true":"false";
// console.log(ages);


// function sum(a, b) {
//     if (a == null || b == null) {
//         console.log("The entered values are empty.. kindly enter valid numbers.");
//     } else if (typeof a === "string" && typeof b === "string") {
//         let c = parseInt(a) + parseInt(b);
//         console.log("Sum:", c);
//     }
// }

// let a= "2";
// let b="3";

// sum(a,b);



let arr= [
    {
        name:"Hafsa",
        age: 20
    },

    {
        name:"hifza",
        age:"23"
    },

    {
        name:"momina",
        age:"20"
    },
    {
        name:"areej",
        age:"40"
    }
]

arr.map((value , index)=>{
         console.log(value.name , value.age)
})

