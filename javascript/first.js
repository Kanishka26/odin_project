// for(let i=0;i<=100;i++){
//   if(i%2===0){
//     console.log("i=",i)
//   }
// }

// let gamenumber=45;
// let un=Number(prompt("guess the game number:"));
// while(un!==gamenumber){
//   alert("guessed wrong number");
//   un=Number(prompt("guess the number"));
// }
// alert("number guessed correctly")
//console.log("Number guessed correctly");

// let str=prompt("enter your full name:");
// // s=str.length;
// // console.log("@"+str+s);

// let a=[23,67,84,45,23,56,78,90,12,34,56,78,90];
// let sum=0;
// for(let el in a){
//   sum+=a[el];
// }
// let avg=sum/a.length;
// console.log("sum=",sum);
// console.log("avg=",avg);

//code to  change array to another one where the price is reduced by 10%

// let a=[234,562,431,654,233]
// for (let i=0;i<a.length;i++){
//   a[i]=a[i]-a[i]*0.1;
// }
// console.log(a);

//array methods
// a=["Bloomberg","Google","Microsoft","Apple","Amazon"];
// a.shift(); //removes first element
// console.log(a);
// a.splice(1,1,"Ola");
// console.log(a);
// a.push("Tesla"); //adds element at the end of array
// console.log(a);



//function practice


// function v(a){
//   let aq=a.toLowerCase();
//   let c=0;
//   for (let i of aq){
//     if(i==='a'||i==='e'||i==='i'||i==='o'||i==='u'){
//       c++;
//       console.log(i);
//     }

//   }
//   console.log("count of vowels=",c);
// }

//foreach

// let a =[1,2,3,4,5,6,7,8,9,10];
// a.forEach((val=>{
//   console.log(val*val);
// }))

//filter

// a=[67,98,87,61,90,93,95]
// let b=a.filter((val)=>{
//   return val>90;
// })
// console.log(b);


//reduce function

// n=prompt("enter the number of elements in array:");
// let a=[];
// for(let i=1;i<=n;i++){
//   a[i-1]=i;
// }
// let sum=a.reduce((r,v)=>{
//   return r+v;});
// console.log("sum of array=",sum);
// let mul=a.reduce((r,v)=>{
//   return r*v;
// });
// console.log("multiplication of array=",mul);



//dom exercises

// let h1=document.querySelector("h1");
// console.dir(h1.innerText);
// h1.innerText=h1.innerText+" from apna college";

// let divs=document.querySelectorAll(".box");
// console.log(divs);
// divs[1].innerText="hello world";
// divs[0].innerText="i am the first div";
// divs[2].innerText="i am the third div";


