// q10

// const product=["TV","AC","Fan"]
// const [A,B,C] = product

// console.log(B);

// const pro={
//     "TV" : 10000,
//     "AC":50000,
//     "Fan":5000
// }
// const{TV,AC,Fan}=pro
// console.log(AC);

// 11

// class Product{
//     name="TV"
//     ProductId=5
//     price = 50000


//     displayInfo(){
//         console.log(this.name);
//         console.log(this.ProductId);
//         console.log(this.price);
        
//     }
// }
//   const pro = new Product()
//   pro.displayInfo

// 12

// class InvalidCouponCode extends Error{
//     constructor(message){
//         super(message)
//         this.name = "InvalidCouponCode"
//         this.message= "Enter valid coupon"
//     }
// }

// function checkOut(coupon){
//     try{
//         if(coupon){
//             throw new InvalidCouponCode();
//         }else{
//             console.log("Coupon validated successfull...");
            
//         }
//     }catch(error){
//         console.log(error.name+":"+ error.message);
        
//     }
// }
// checkOut(true)

// 13

// class ThresholdError extends Error{
//     constructor(message){
//         super(message)
//         this.name = "ThresholdError"
//         this.message= "Threshold limit falls below 5 units"
//     }
// }

// function threshold(threshold){
//     try{
//         if(threshold<5){
//             throw new ThresholdError();
//         }else{
//             console.log("Threshold limit"+ threshold);
            
//         }
//     }catch(error){
//         console.log(error.name+":"+ error.message);
        
//     }
// }
// threshold(6)


// 14

// const task = new Promise((resolve,reject)=>{
//     const response = fetch("https://jsonplaceholder.typicode.com")
//     const data = response.json

//     resolve(data);
    
// })
// task.then((result)=>{
//     console.log(result); 
// })




// 16

// const marks =[90,85,80,65,45]
  

// let greater = marks.filter((marks)=>{
//     return marks>80;
// })
// console.log(greater)

// 17

// const marks =[90,85,80,65,45]
  

// let total = marks.reduce((marks,total)=>{
//     return marks+total;
// })
// console.log(total)

// 18
// export const a=18
// export function add(a,b){
//     return a+b
// }

// 19
// const marks =[90,85,80,65,45]
  

// let increase = marks.map((marks)=>{
//     return marks+10;
// })
// console.log(increase)






