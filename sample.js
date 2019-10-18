//import { resolve } from "dns";

//import { resolve } from "path";

// const functions = {
//      add:(num1,num2)=>num1+num2 
// }

// module.exports=functions

     // var fs = require('fs')
     // fs.readFile('packages.json','utf8',(err,data)=>{
          

     //      if(err){ console.log(err)
     //      }else{
     //           console.log(data)
     //      }
     // })
     
// const promise = new Promise((resolve,reject)=>{
//      setTimeout(function() {
//           resolve('solved');
//      },300);
// })     

// promise.then(data=>{
//      console.log(data)
// })



// function fun(){

//   return new Promise((resolve,reject)=>{
//     resolve('solved')
//   })
// }

// async function newAsync(){

//   var data = await fun();

//   console.log(data)
// }


// var promise1 = new Promise(function(resolve, reject) {
//      setTimeout(function() {
//        resolve('foo');
//      }, 300);
//    });
   
//    promise1.then(function(value) {
//      console.log(value);
//      // expected output: "foo"
//    });

     // promise = new Promise((resolve,reject)=>{

     //      var fs = require('fs')
     //      fs.readFile('package.json','utf-8',(err,data)=>{
     //           if(err){
     //                reject(err)
     //           }
     //           resolve(data)
     //      })
     // })

     // promise.then(data=>{
     //      console.log(data)
     // }).catch(err=>{
     //      console.log(err)
     // })


     // promise = new Promise((resolve,reject)=>{

     //      readfile()
     //      function readfile(){
     //                var fs = require('fs')
     //                var data = fs.readFile('packages.json','utf8',(err,data) =>{
                              
//                     if(data == undefined){
//                          reject(err)
//                     }else{
                        
//                          resolve(data)
//                     }
//                })
               
//      }


// })

// promise.then(data =>{
//      console.log(data)
// }).catch(err =>{
//      console.log(err)
// })

// function readfile(){

//     return new Promise((resolve,reject)=>{

     
//                     var fs = require('fs')
//                     var data = fs.readFile('package.json','utf8',(err,data) =>{
                              
//                          if(data == undefined){
//                               reject(err)
//                          }else{
//                               resolve(data)
                              
//                          }
//                     })
                    
          
// })

// }

// async function asyncCall(){
//      var data
//      try{
//      data = await readfile();
//      console.log(data)
//      }catch(e){
//           console.log(e)
//      }

// }

// asyncCall();




const promise = new Promise((resolve,reject) => {
          function fun(){
            resolve('this is web')
          }
          fun()
})

promise.then(data => {
  console.log(data)
})



function fun(){
  return new Promise((resolve,reject)=>{
    resolve('this is server')

  })
  
}

async function funAsync(){

  let result = await fun()

  console.log(result)
}
funAsync()