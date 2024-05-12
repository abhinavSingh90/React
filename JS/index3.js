console.log('this is js');

//FOR IN LOOP

let rectangle={
    length:2,
    height:3
};

let dest={};

// to itterate this object

for(let key in rectangle){
    console.log(key,rectangle[key]);
}

//keys array is built:-
// for(let key of Object.keys(rectangle)){
//     console.log(key);
// }

// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// if('length' in rectangle){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }

// for(let key in rectangle){
//     dest[key]=rectangle[key];
// }

// for(let key in dest){
//     console.log(key,dest[key]);
// }

let destination=Object.assign({},rectangle);
console.log(destination);

let des={...rectangle};
console.log(des);

let rect={
    value:220
};

let d=Object.assign({},rectangle,rect);
console.log(d);

let lastName="rawat";
let firstName=new String('abhinav');

let message="this is abhinav";
let w=message.split(' ');
console.log(w);

// let message2=`this is
// ${lastName}
//  my js`;


 let date=new  Date();
 console.log(date);

// console.log(message2);

let date2=new Date(2004,0,2,12);
console.log(date2);

let rd=new Date('march 2 2003 ');
console.log(rd);

