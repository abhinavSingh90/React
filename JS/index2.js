console.log("hello jee");

// let car={
//     carName:'honda',
//      length:12,
//      weight:200,

//      draw :function(){
//         console.log('paint the car');
//      },

//      runn :function(){
//         console.log('car is start to run');
//      }



// };

// function createCar(n,len,wt){
//     return car={
//         carName:n,
//          length:len,
//          weight:wt,
    
       
//          draw(){
//             console.log('paint the car');
//          },

//          runn(){
//             console.log('car is start to run');
//          }
        
    
    
    
//     };

   

// //     return car;
// }
// let a=createCar('honda',10,20);
// console.log(a);

// let b=createCar('SUV',20,30);
// console.log(b);


// BY USING CONSTRUCTOR FUNCTION::--

function Car(n,l,h){
    this.name=n;
    this.length=l;
    this.height=h;

    this.draw= function(){
        console.log('paint the car');
    }
        // it could not return anything it only initialized the objcts.
}

let obj1=new Car('honda',17,188);
obj1.c=5;

console.log(obj1);

// let obj2=new Car('THAR',17,188);
// console.log(obj2);
delete obj1.c;
console.log(obj1);


