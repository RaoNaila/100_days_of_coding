//***************************************************************************************** */

//////////////starting 100 day of coding//////////////////////////

//*****************************DAY FIRST********************************************* */
                 //================QUESTION 1===================//

//   console.log("Hello world.")

                  //================QUESTION 2   ===================//

//  let personalMessage:string="salam Naila , would you like to learn some typescript today"
//  console.log(personalMessage);

                     //================QUESTION  3 ===================//
 
//let personName:string="nAIla "
//change in lowercase
// personName.toLocaleLowerCase()
// console.log(personName.toLocaleLowerCase());

//change in upppercase

// personName.toLocaleUpperCase()
// console.log(personName.toLocaleUpperCase());

// //change in title case

// personName.charAt(0).toLocaleUpperCase()+ personName.slice(1).toLocaleLowerCase()
// console.log(personName.charAt(0).toLocaleUpperCase()+ personName.slice(1).toLocaleLowerCase());

//**********************************complete day first************************************** */


//*****************************DAY second********************************************* */

       
                     //================QUESTION  4===================//
// famous person quote

//console.log(`'Albert Einstine once said,"A person who never made a mistake never tried anything new."`);

                      //================QUESTION  5===================//
// let famous_person:string="Alber Eienstein";
// let message:string="A person who never made a mistake never tried anything new.";
// console.log(`'${famous_person} oncce said,"${message}"'`);
     
                      //================QUESTION  6===================//

// let myName:string="\t\n Naila\t\n"
// console.log(myName);
// console.log(myName.trim());

//**********************************complete day second************************************** */


//********************************** day 3rd**************************************** */
                          
                      //================QUESTION  7===================//

//additin
// let num1:number=4;
// let num2:number=4;
// console.log(num1+num2);
//subtraction
// let num3:number=10;
// let num4:number=2;
// console.log(num3-num4);
//multiplication
// let num5:number=4;
// let num6:number=2;
// console.log(num5*num6);
//division
// let num7:number=16;
// let num8:number=2;
// console.log(num7/num8);
   
                      //================QUESTION  8===================//
//create 4 lines of operatror out put should be 8
// console.log(5+3);
// console.log(4*2);
// console.log(12-4);
// console.log(16/2);

                      //================QUESTION  9===================//
//sve favriot number in a variable
// let myFavriotNumber:number=1;
//print favriot number with a message
// console.log(`My favriot number is ${myFavriotNumber}.`);


//**********************************3rd day complete************************************** */


//*************************************4TH day*********************************** */


                      //================QUESTION  10===================//
//Naila 21/5/2024
//this message print a personal messsage .
// let name:string="Naila";
// console.log(`well its me ${name} working on my project 100 days of coding.`);
                    
                         //================QUESTION  11===================//
// let myFriends:string[]=["Iqra","Maliha","Kanwal","Ainy","Sidra"];

// for (let i=0; i<5; i++) {
//     console.log(myFriends[i]);
//}
                           //================QUESTION  12===================//
// let myFriends:string[]=["Iqra","Maliha","Kanwal","Ainy","Sidra"];
// for(let name of myFriends){
//     console.log(`salam ${name} how are you.?`);
    
// }
  
//**********************************4th day complete************************************** */

//**********************************5th day************************************** */
                     
                   //=============QUESTION 13========================//

//creat array
// let transportation :string[]=["civic car","train","Aero plane"];
//call element of array one by one 
// transportation.forEach(transport=>{
//     console.log(` I would like to own a ${transport}`);
    
// });

                   //=============QUESTION 14========================//

// let guestList:string[]=["Naila","Shabana","Farhana"];
// guestList.forEach(guest=>{
//     console.log(`salam dear ${guest} would you like to come today at my home.`);
    
// });
                   //=============QUESTION 15========================//

//removed guest
// let guestList:string[]=["Naila","Shabana","Farhana"];
// let removedGuest="Naila";
// console.log(`${removedGuest} cant come today.`);

// let newGuest="Rehana";
// guestList.splice(0,1,"Rehana");
//new invitation
// guestList.forEach(guest=>{
//     console.log(`Dear ${guest} would you like to join us today.`);
    
// })
//**********************************5th day complete************************************** */


//**********************************6th day************************************** */


           //=================QUESTION 16===================//

// let guestList:string[]=["Rehana","Shabana","Farhana"];
//good news found big table
// console.log("gud news ! i found a big table for dinner");
//adding more guest
// guestList.unshift("Farhana");
// guestList.splice(1,0,"Bushra");
//  guestList.push("Farzna");
//  guestList.forEach(guest=>{
//     console.log(`Dear ${guest} would you come today.`);
    
//  })
                   //=================QUESTION 17===================//
// let guestList:string[]=["Rehana","Shabana","Farhana","Shabana","Bushra","farzana"];
// console.log("unfortunatluy i can invite only two guest");

// let invitedGuest=2;
// for(let i=0; i <guestList.length;i++){
//     if(i<invitedGuest){
//         console.log("salam ," + guestList[i] + "you are still invited.");
        
//     }

    
// }
      //=====part two og  question 17 show empty array===========//

// let guestList:string[]=["Rehana","Shabana","Farhana","Shabana","Bushra","farzana"];

 
// guestList.splice(0,guestList.length);
// console.log(guestList);

  //================QUEation 18====================//

//   let places:string[]=["Saudia Arabia","Egypt","Turkey","Dubai","America"];
//   console.log("original order:", places);
//   console.log("Alphabetical orde:",[...places].sort());
//   console.log("original orde:",places);
//   console.log("Reverse  alphabetical order:",[...places].sort().reverse);
//   console.log("original orde:",places);
//   places.reverse();
//   console.log("Reversed order:",places);
//   places.reverse();
//   console.log("original orde:",places);
//   places.sort();
//   console.log("Alphabetical order :",places);
//   places.reverse();
//   console.log("Reverse alphabetical order:",places);
  
  
  //**********************************6th day complete************************************** */
  
  //**************************************7th day ************************************** */

                  /////////////////QUESTION 19//////////////////////
// //show length of array
// let myGuest:string[]=["Naila","Shumaila","Shaista","Farzana","Nosheen"];
// console.log(` I am inviting totla ${myGuest.length} guest at tonaight party`);

            //=================QUEATION 20 =====================//
  //creat array on your wish 
  //  let countries:string[]=["Saudi arabia","Turkey","Egypt","America","phalestine"]
  
  // for( let country of countries){
    // console.log(`i like to visit ${country} country`);
    // console.log("Countries I'd like to visit:", country);
    // };
    // write a paragraph
    // console.log("Countries I'd like to visit:", countries);
            //=================QUEATION 21 =====================//
  // creat an object of any thing and store its data in it

// let car={
//   model:2024,
//   company:"corola",
//   color:"Black",
//   is0meter:true,
// };
// console.log(`thixs car is model ${car.model} and made by ${car.company} compay in color ${car.color}.`);

//**********************************7th day complete************************************** */
//*************************************8th day************************************** */

           //=================question 22 =======================//

//intentak error
// let myfruits:string[]=["Apple","Banana","Mnago"];
// console.log(myfruits[4]);  //ther is no any 4 index

//correcting error
//  console.log(myfruits[2]);
         //=================question 23 =======================//

//conditional test

// let four=4;
// let five=5;

//first test true 
// console.log("four is equal to 4");
// console.log(four==4);
//second test
// console.log("five is equal to 5 ");
// console.log(five ==5);
//third test true 
//  console.log("4 is less then 5");
//  console.log(4 < 5);
 //4th tes true 
//  console.log("5 is greater then 4");
//  console.log(5 > 4);
 //5th test true 

//  console.log("four is not equal to five");
//  console.log(four !== five);
 
 //=================question 24 =======================//

 //more conditional test
//  let apple :string="apple"

 //true test
//  console.log(apple == "apple");
//  console.log(apple.toLocaleUpperCase() == "APPLE");

 
//  //test false
//  console.log(apple !== "apple");
//  console.log(apple.toLocaleUpperCase() !== "APPLE");

 // test with number
  // console.log("Numerical test");
  // console.log(5>6);
  // console.log( 5 == 5);
   // test  usin "and" and 'or' operator

  //  console.log(" Test with `and` and `or` operator");
  //  console.log(true && false);
  //  console.log(true || false);
  //  console.log(false && false);
// test checking an item is in array or not

// let names:string[]=["Naila","Hoorain","Shabana"]
   
// console.log("is farhana in names");
// console.log(names.includes("farhana"));
// console.log("is Naila in names");
// console.log(names.includes("Naila"));
// console.log("check weather an item is not in an array");
// console.log(!names.includes("Farzana"));



//**********************************8th day complete************************************** *

//************************************** 9th day************************************** *
     //==========================Queation 25========================//
//if statement
// let aleien_color ="green"
// if(aleien_color=== "green"){
//   console.log("you just earned 5 points");
  
// };
 //==========================Queation 26========================//
 // if else statement
//  let aleien_color = "green";

//  if(aleien_color==="green"){
//   console.log("you just earned 5 points");
  
//  }else{
  // console.log("you just earned  10 points");
  
//  };
 //version two
//  aleien_color == "red";
//  if(aleien_color === "red"){
  // console.log("you just earned 10 points for shooting the alien .");
  
//  }else{
//   console.log("you just win");
  
//  };
 // else ststment run 
  // aleien_color = "yellow";
  // if(aleien_color === "green"){
  //   console.log("you just earned 15 points");
    
  // }else{
  //   console.log('you just earned 30 points');
    
  // };
  
 //==========================Queation 27========================//
//now else if 
// let aleien_color ="green";
// if(aleien_color === "green"){
//   console.log("you just earned 5 points");
  
// }else if(aleien_color === "yellow"){
//   console.log("you just earned 10 points.");
  
// }else if(aleien_color=== "red"){
//   console.log("you just earned 15 points.");
  
// };
////////////////////////////////////////////////////////
//version 2
// let aleien_color ="yellow";
// if(aleien_color === "green"){
//   console.log("you just earned 5 points");
  
// }else if(aleien_color === "yellow"){
//   console.log("you just earned 10 points.");
  
// }else if(aleien_color=== "red"){
//   console.log("you just earned 15 points.");
// } ;
////////////////////////////////////////////////////////////////
//version 3
   
  
// let aleien_color ="red";
// if(aleien_color === "green"){
//   console.log("you just earned 5 points");
  
// }else if(aleien_color === "yellow"){
//   console.log("you just earned 10 points.");
  
// }else if(aleien_color=== "red"){
//   console.log("you just earned 15 points.");
// } ;
 
 
//************************************** 9th day completed************************************** *
 
 
//************************************** 10th day************************************** *

         //==========================QUESTION 28 ====================================//
           
//if else chain
//stage of life
// let age =25;

// if(age < 2){
//   console.log("The person is a toddler");
  
// }else if( age < 4){
//   console.log("you are  a kid ");
  
// }else if(age < 20){
//   console.log("The person is teenager.");
  

// }else if(age < 65){
//   console.log("The person is an elder");
  
// }else if(age  > 65){
//   console.log("The person is older");
  
// };


         //==========================QUESTION 29 ====================================//

//create array and check certain fruit is in array or not
//  let fruits:string[]=["Apple","Banana","Mango"];
//  if(fruits.includes("Apple")){
//   console.log("i really like Apple!");
  
//  }else if(fruits.includes("Orange")){
//   console.log("there is no orange in fruits.");
  
//  };

  //==========================QUESTION 30 ====================================//

//special grreting for admin in loop
// let useres:string[]=["Admin","user1","user2","user3"];
// for(let user of useres){
//   if(user === "Admin"){
//     console.log("Hello Admin ! how are you");
    
//   }else{
//     console.log("welcome in web page");
    
//   }
// };
//************************************** 10th day completed****************************//




