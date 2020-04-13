

let arr =
    [
        {
            name: "joda",
            age: 20,
            color: " blue"
        },
        {
            name: "polo",
            age: 4,
            color: "red"
        }

    ]


    
    /*
    for(let i of otro)
    {
        
        document.querySelector("p").innerHTML+=`${i} :  `;
    }
    */
   
   
   let info;
   
//   for (let i = 0; i < arr.length; i++) {
       //    info=`${arr[i].name}, ${arr[i].age}, ${arr[i].color}</br>`;
       
       
       //document.querySelector("p").innerHTML +=
       
 //   }
    
let otro = [4, 56, 78, "polo", {name : "joda", age : 29}];
/*

otro.forEach(function (r, e) {
    document.querySelector("p").innerHTML+=` index: ${e} | value -> ${r} <br>`;
})

*/


for(let i of otro)
{

    document.querySelector("p").innerHTML+=`  ${i} `;
}
