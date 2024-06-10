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

//************************************** 11th day ****************************//

      //=======================Question 31===========================//

      // - No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

      // If the list is empty, print the message We need to find some users!
      
      // Remove all of the usernames from your array, and make sure the correct message is printed


// let users:string[]=["Admin","user1","user2","user3"];
// if(users.length===0){
//   console.log("list is empty");
  
// }else{
//   console.log("there are some user");
  
// };
// //now empty user
// users=[];
// if(users.length === 0){
//   console.log("we need some users");
  
// }else{
//   console.log("hello");
  
// };

//=======================Question 32===========================//

// Q32 - Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

// Make a list of five or more usernames called current_users.

// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

//create 2 arrats of same name at least two same name
// let user1:string[]=["Naila","shabna","Farhana","farzana","nosheen"];
// let user2:string[]=["Naila","BUSHARA","Farzana","Rehan","shaista"];

// user2.forEach((user)=>{
  // if(user1.some(
  //   (users)=>users.toLocaleLowerCase()===user.toLocaleLowerCase()
  // )){
  //   console.log(`${user} need to enter a newname.`);
    
  // }else{
  //   console.log(`${user} is available`);
    
  // };
    
// });
    //==============================Question 33=============================//
//     Q33 - Ordinal Numbers: Ordinal numbers indicate their position in a array, 
//such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.

// Store the numbers 1 through 9 in a array.

// Loop through the array.

// Use an if-else chain inside the loop to print the proper ordinal ending for each number.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", 
//and each result should be on a separate line.

//  let numbers:number[]=[1,2,3,4,5,6,7,8,9];
// for(let ordinalnumber of numbers){
//   if(ordinalnumber === 1){
//     let number= ordinalnumber+"st"
//     console.log(number);
    
//   }if(ordinalnumber===2){
//     let number=ordinalnumber+"nd"
//     console.log(number);
//   }if(ordinalnumber===3){
//     let number =ordinalnumber+"rd"
//     console.log(number);
    
//   }else{
//     let number=ordinalnumber+"th"
//     console.log(number);
    
//   }
// };
//through foreach
// numbers.forEach((number) => {
//   let suffix = "th";
//   if (number === 1) {
//     suffix = "st";
//   } else if (number === 2) {
//     suffix = "nd";
//   } else if (number === 3) {
//     suffix = "rd";
//   }
//   console.log(`${number}${suffix}`);
// });
/************************************** 11th day completed****************************/
/************************************** 12th day*******************************///
   //=================Questio 34==============================//

// - Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names 
// in a array, and then use a for loop to print the name of each pizza.

// Modify your for loop to print a sentence using the name of the pizza instead of 

// printing just the name of the pizza. For each pizza you should have one line of output
//  containing a simple statement like I like pepperoni pizza.

// Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as
//  I really love pizza!

// let favriotPizza:string[]=["tikka piazza","malia pizza","cheezey pizza"];

// favriotPizza.forEach(pizza=>{
//   console.log(`i like ${pizza} too much.`);
  
// });
// console.log("i love pizza.");
   //======================Question 35 =========================//
  //  Q35 - Animals: Think of at least three different animals that have a common characteristic. 
  //  Store the names of these animals in a list,and then use a for loop to print out the name of
  // each animal.Modify your program to print a statement about each animal, 
  // such as A dog would make a great pet.
  // Add a line at the end of your program stating what these animals have in common.
  //  You could print a sentence such as Any of these animals would make a great pet
  // let pets :string[]=["goat","cow","camel"];
  // pets.forEach(animal=>{
  //   console.log(`A ${animal} would make a great pet.`);
    
  // });
  // console.log(`these animals are good pets!.`);

  //==========================Question 36 ===========================//

  // Q36 - T-Shirt: Write a function called make_shirt() that accepts a size and the text of
  //  a message that should be printed on the shirt. The function should print a sentence 
  //  summarizing the size of the shirt and the message printed on it. Call the function.

  //  function make_shirt(size:string,message:string){
  //      console.log(`you order ${size} size shirt  with print message : ${message}`);
       
  //  };
  //  make_shirt("medium","love type script");

/************************************** 12th day completed****************************/


/************************************** 13th day started******************************/
        //==================Question 37 ======================//
// Q37 - Large Shirts: Modify the make_shirt() function so that shirts are large by default with 
// a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default 
// message,and a shirt of any size with a different message.
// function make_shirt(size:string="large",message:string="i love type script"){
//   console.log(`Making a ${size} t.shirt with the message print on it :${message}`);
  
// };
// make_shirt();
// make_shirt("medium");
// make_shirt("small","i am a web developer");
           //===========================Question 38 =========================//
//  Q38 - Cities: Write a function called describe_city() that accepts the name of a city 
//  and its country. The function should print a simple sentence, such as Karachi is in Pakistan
//   Give the parameter for the country a default value. Call your function for three different cities,
 //   at least one of which is not in the default country.
  // function describe_city(city:string,country:string="Pakistan"){
  //   console.log(`${city} is in ${country}`);
    
  // };
  // describe_city("karachi");
  // describe_city("Lahore");
  // describe_city("Mecca","ASaudi arabia");

//   Q39 - City Names: Write a function called city_country() that takes in the name of a city
//   and its country. The function should return a string formatted like this:"Lahore, Pakistan"
//  Call your function with at least three city-country pairs, and print the value
//  that’s returned
 
// function city_country(city:string,country:string):string{
//   return `${city},${country}`
// };
// console.log(city_country("Karachi","Pakistan"))

// console.log(city_country("Tokyo","Japan"));
// console.log(city_country("Dehli","India"));
/************************************** 13th day completed****************************/
/************************************** 14th day started****************************///

//===============================Quesstion 40 ==============================//
// q40:Album: Write a function called make_album() that builds a Object describing a music album.
// //  The function should take in an artist name and an album title, and it should return a
//   Object containing these two pieces of information. Use the function to make three dictionaries
//   representing different albums. Print each return value to show that Objects are storing the
//    album information correctly. Add an optional parameter to make_album() that allows you to 
//    store the number of tracks on an album. If the calling line includes a value for the number 
//    of tracks, add that value to the album’s Object.
//  Make at least one new function call that includes the number of tracks on an album.
// function make_album(album:string,tiltle:string,tracks?:number){
//   let myAlbum ={
//           album,
//           tiltle,
//           tracks}
//           return myAlbum;
// };
// console.log(make_album("first","rock"));
// console.log(make_album("second","pop"));
// console.log(make_album("third","hithot",10));
//======================Question 41============================//
// Q41 - Magicians: Make a array of magician’s names. Pass the array to a 
// function called show_magicians(),which prints the name of each magician in the array.
//   let magicians:string[]=["Hmoon","BILL batoori","Umro ayyar"];

// function show_magicians(magicians:string[]){
//   magicians.forEach((magician)=>{
//     console.log(magician);
    

//   })
// } ; 
// show_magicians(magicians) 

    
// Q42 - Great Magicians: Start with a copy of your program from Exercise 40.
// Write a function called make_great() that modifies the array of magicians by adding 
//the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

// let magicians:string[]=["Hmoon","BILL batoori","Umro ayyar"];

// function show_magicians(magicians:string[]){
//   magicians.forEach((magician)=>{
//     console.log(magician);
    

//   })
// } ; 

// function make_great(magicians: string[]) {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = magicians[i] + " the Great";
//   }
// }

// make_great(magicians); // Modifies the original array
// show_magicians(magicians); // Show
/************************************** 14th day completed****************************/