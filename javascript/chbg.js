let mode=document.querySelector("#mode");
let curr="light";
let body=document.querySelector("body");
mode.addEventListener("click",()=>{
  if(curr==="light"){
    body.classList.add("dark");
    body.classList.remove("light");
    curr="dark";
  }
  else{
    body.classList.add("light");
    body.classList.remove("dark");
    
    curr="light";
    
  }
  console.log(curr);
});