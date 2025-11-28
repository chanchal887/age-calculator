let p = document.querySelector("p")
let input = document.querySelector("input");
let btn = document.querySelector("button");
let box = document.querySelector(".box")
const currntdt = new Date;


btn.addEventListener("click",(e)=>{
  let year = currntdt.getFullYear();
  let month = currntdt.getMonth();
  let date = currntdt.getDate()

  let val =(date,month,year)
   let inp = parseInt(input.value)-val
   console.log(-inp);
   p.innerHTML=`your age is ${-inp}`;

   
   if(input.value==""){
    alert("please first enter the value")
    p.innerHTML=""
   }
})



