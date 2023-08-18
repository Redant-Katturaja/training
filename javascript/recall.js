//closures concept
let num=2603;
function outer(name1){
   function inner(name2){
    let innerVar='local variable'
    console.log(num)
    console.log(innerVar)
    console.log("Outer Name:"+ name1)
    console.log("Inner Name:"+ name2)
   } 
    return inner
}
let receive=outer('Raja')
receive('Ashwin')
function fun1(x){
   return function fun2(y){
        return x+y;
    }
}
let closureExample=fun1(26)
console.log(closureExample(6))
//closure concept Over.....//




//callback function start

let arr=['Raja','Ashwin','Palani','Wajidth','Gokul']

   arr.forEach((val)=>console.log(val));
//callback function over....///




//promise concept .....////
let reachA=new Promise((resolve,reject)=>{
    const reached=true; 
    if(reached){
     setTimeout(resolve,3000,'Raja Reached')
    }
     else{
        reject('Ashwin not Received')
     }
    })
     let reachB=new Promise((resolve,reject)=>{
        const reached=true; 
        if(reached){
         setTimeout(resolve,1500,'Ashwin Reached')
        }
         else{
            reject('Raja not Received')
         }

})
let reachC=new Promise((resolve,reject)=>{
    const reached=true; 
    if(reached){
     setTimeout(resolve,2000,'Palani Reached')
    }
     else{
        reject('Wajidth not Received')
     }

})
  Promise.all([reachA,reachB,reachC])
  .then((message)=>console.log(message))
  .catch((message)=>console.log(message))
  //promise concept end.........../////


  //Async & Await ...///
  let reachD=new Promise((resolve,reject)=>{
    const reached=false 
    if(reached){
     setTimeout(resolve,1500,'Ashwin Reached')
    }
     else{
        reject('Raja not Received')
     }
    })

  async function asyncStatus(){
    try{
        console.log('Async & Await Demo')
        res=await reachD
        console.log(res)

    }
    catch(err){
        console.log(err)
    }
  }
   asyncStatus();


//Promise,Async and Await end.....///




//Map >>>>>>>>>/////
const fruits=['Apple','Banana','Orange','Mango']
const colors=['Red','Yellow','Orange','Yellow']
const fruitsColors=fruits.map((value,index)=>value +":"+colors[index])
console.log(fruitsColors);


//Filter>>>>>>>/////
let fruits1=[
        {name:"Apple",category:"fruits"},
        {name:"Banana",category:"fruits"},
        {name:"Onion",category:"Vegetables"},
        {name:"Mango",category:"fruits"},
        {name:"Tomatto",category:"Vegetables"}
]
let filterFruits=fruits1.filter(item=>item.category==='fruits')
    console.log(filterFruits);
