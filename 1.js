//let js = ("good");

//if (js=='good') alert ('java script is fun!');

//console.log (60+70+2_10)

//values- ערכים

//(מציגה בבדיקה בדפדפן)
//console.log ('maya');
//  STRING פעולה שמציגה טקסט
//console.log (23);
//פעולה שמציב מספר NUMBER

//variables- משתנים
//כדי להפוך ערכים למשתנים נשתמש:
//let firstrName ='maor';
// firstName= variable= משתנה
//console.log(firstrNamerre);

//PRIMITIVE DATA TYPES (value has type, NOT variable)
//NUMBER= (let age = 23;) (use fo numbers)
//SRTING= (let firstname= 'maya';)(use for text)
//BOOLEAN= (let fullage= true;) (allways true\false)
// UNDEFINED= (let children;) ( empty values (variable without a value))
//NULL= empty value
//SYMBOL= value that can not be chang (ערך שאי אפשר לדרוס)

// כדאי לסמן מקטע ארוך של קוד במקום לסמן משפט משפט ב// נסמן אותו בתחילתו ב: */ /*

//boolean-
//let javaScriptIsFun= true;
//console.log ('javascruptIsFun')
//for chek which type value : (typeof)
//console.log (typeof true);

//dinamik types (change a type of values)
//let javaScriptISfun= true;
//console.log (javaScriptISfun);
//console.log (typeof javaScriptISfun)

//javaScriptISfun='YES!' //(javaScriptIsFun=true = boolean - הגדרנו למעלה את הערך הזה כ)
//console.log (typeof javaScriptISfun)// we change value type from boolean to string

//undefined
//let year;
//console.log (year);
//console.log (typeof year); // typeof= undefined

//year=1991;
//console.log (typeof year); // typeof= number


//console.log (typeof null); // typeof = object- error


//CONST 

//let age = 30; // משתנה לא קבוע= ניתן לדרוס אותו (הגדרנו שהגיל הוא 30 ואחכ שנינו והגדרנו את הגיל ל31)
//age= 31;

//const BirthYear= 1995; //(קונסט שווה לפעולה לט אך ההבדל בניהם הוא כאשר אנחנו משתמשים בקונסט לא נוכל לשנות את הערך בעתיד- לא נוכל לדרוס אותו (מדובר במשתנה קבוע!))
// בקונסט לא נוכל להשאיר משתנה פתוח- חייב להכניס ערך למשתנה
//const job; //(דוגמא= זאת שיגאה)

// (if we know the variable go to change we use (let) if we know the variable not change we use (const))

//VAR - old way to finding varablse - almost like (let)

 //var job= 'programmer'
 //job= 'teacher'

//OPERATORS (- / + / * / %)
//const now= 2037;
//const ageJonas= 2037-1991;
//console.log (ageJonas); 

//to add two word ("word " + "word ")
// const firstname= 'maya'
// const lastname= 'maman'
//console.log (firstname+ " רווח "+ lastname) => to do space between  two words
 
//
// let X= 10+5; (answer= 15)
// X += 10; (answer= x = x +10 = 25 )

// X++; (answer= X = x + 1)
// X--: (answer= X = x - 1)

//  if jonas older than Sara = true
// consol.log(ageJonas > ageSara); (opthion: < > <= >=) 
// if sara is plder than 18 = true
//consol.log (ageSara >= 18);

//we can choos two variabl in the sme time
// let x, y;

//coding 
 
//const massJohn = 92;
//const highJohn= 1.75;
 
//const massMark= 78;
//const highMark= 1.95;

//console.log (massJohn*highJohn, massMark*highMark);
 
//const JohnBMI= (massJohn/ highJohn**2);                     //2 ways
//const MarkBMI= (massMark/ (massMark*highMark);            //same result

//console.log (JohnBMI, MarkBMI); 
//console.log (MarkBMI > JohnBMI);
//console.log (JohnBMI > MarkBMI);


// SRTING AND TEMPLATE LITERALS

//const firstName= 'maya';
//const job= 'conditor';
//const BirthYear= '1995';
//const year= 2022

//const Maya= "i'm "+ firstName + ' , a ' + Number( year- BirthYear )
//+ ' years old' + job + "!";
// console.log (Maya)

//const mayaNEW = `I'm ${firstName}, a ${year-BirthYear} year old ${ job} !` // ` ${ varible } `
//console.log ( mayaNEW)                                 // result=> I'm maya \\ instead "i'm"+ firstmane
 
//console.log ('string with \n\ 
//multiple \n\
//line');         /// \n\ => new line
 
//IF / ELES
// if () {

//} eles {

//}

 //Sarahage= 19;
//const isoldenough= Sarahage >= 18;   // this is true => so it's shoe tje massage is the value is false we dont see the massage because the condition dosent exsist

//if (isoldenough){ 
  //  console.log ('sarah can start driving license car');
//}

  
//Sarahage= 15;
//const isoldenough1= Sarahage >= 18; // now the unser is false so we add ELES

//if (isoldenough1){ 
 //   console.log ('sarah can start driving license car');
//} else { 
 //   const yeatleft = 18 - Sarahage;
   // console.log (`sarah is too young wait another ${yeatleft} year`)
//}


//coding
 // how have the higher BMI?

//const JonasBMI= 22.6;
//const markBMI= 54;
//if( JonasBMI > markBMI) {
//    console.log ('jonas have higher BMI');
//}
//else { markBMI >JonasBMI 
//} console.log ('mark have higher BMI');

// type conversion and coercion

//type conversion:

//const inputYear= '1991'
//console.log (inputYear+ 18)

//console.log (Number(inputYear), inputYear) 
//console.log (Number(inputYear) + 18); // to change string(1991) to Number we add fanction Number (Number(input)+ 18)

//we can do the opposite=> (String (23))

//console.log (String(23), 23);
               //string //number
// TYPE COERCION
//console.log ('Im ' + 23 + 'years old') //=> the plus(+) operitor making a number (23) to string
//console.log ('Im ' + '23' + 'years old') // the same result

//console.log ('23'- '10'- 3 ); // (string - string - number) the minus (-) operitor making string to number
//console.log ('23' * '2'); // (*) operitor do the same like minus (-) change string to number
//console.log ('23' /  '2'); // change too the string to number


//TRUE AND FALSE VALUES

// 5 FALSY (FALSE) VALUES : 0 , '' , UNDEFINED , NULL , NAN

//console.log (Boolean (0)); //false
//console.log (Boolean (undefined)); //false
//console.log (Boolean ('maya')); //treu
//console.log (Boolean ({})); // true
//console.log (Boolean (''));// false


//const money= 0;
//if (money){ 
    // console.log ( 'dont spend it all!');
// }
// else {'you should get a job!'};

// the answer will be ('you should get a job!') its means false => because value = money is 0 (zero) and we that zero is false

//let high ;
//if (high){
//    console.log ('yay');
//}else { 
//    console.log ('high is undefined');
// }

//answer will be ('high is undefined')= false , because the value undefined, and undefind is false


//EQUALITY OPERATORS == VS ===

//const age = 18;
//  if (age === 18) console.log ('you just became an adult');
 // boolean (===) (true or flase) 18===18 -> true 18===15 false 
 //  (===)-> we use-> when the values exactly the same (number===number) (string===srting)
 
//  const age = '18'; 
//  if (age == 18) console.log ('you just became an adult'); // ('18' == 18)
// we choose two == when the value is not the same types ('18'== 18) -> srting and number

// const favorite= prompt ( "what is your favorite number?"); // we choose prompt when we want to enet a input (pop window)
// console.log (favorite); // when i want to see the input in the consul i making a valeu

// if (favorite == 23) { //'23'==23
    // console.log ('cool!')
// }

// const favorite=  Number(prompt( "what is your favorite number?"));
// console.log (favorite); 
// if (favorite === 23) { 
    // console.log ('cool!')
// }
  // this is anther option to do this -> we use Number to change the string

// if (favorite === 23);{
// console.log ('23 is cool number')
// } else if (favorite=== 7){
// console.log ('7 is good !')
// } else 
// console.log ('number is not 7 or 23')

// if(favourite !== 23)     \\ value not = 23
// console.log ('way not 23?');
 


//  Boolean logic ( AND , OR , NOT OPERATORS)

//&& AND:we need two of the varibals need to be true

//|| OR= one of the varibals need to be true

// NOT OPERATORS= inverst true/false value

// const hasDriverslicense= true;
// const HasGoodVision= false;

// console.log(hasDriverslicense && HasGoodVision); //(false)
// console.log(hasDriverslicense || HasGoodVision); // (true)
// console.log(!hasDriverslicense);                 //(false)

// codding

// const scoreDolphins= 96 && 108 && 89
// const scoreKoalas= 88 && 91 && 110

// const scoreDolphins= ( 96+ 108+ 89) / 3;
// const scoreKoalas= ( 88+ 91 +110)  /3;
// console.log  (scoreDolphins, scoreKoalas);
 
// if (scoreDolphins > scoreKoalas){
//   console.log ('dolphins wins');
// }else if ( scoreDolphins < scoreKoalas);{
// console.log ('koalas wins')
// } if (scoreDolphins === scoreKoalas);
// console.log ('both win')

// switch statement

// const day ='monday'    //definition variable and value 
// switch (day){                            // switch (  )  <= we call the switch to exsmple 'day'
//   case 'monday':                        // we defintion a case and we call it to exsmple 'monday' / 'sunday'..
// console.log ( 'plan course structure');
// break;                                 // we break the actio   
//  case 'teusday': 
//  console.log ('prepare thory vidoeos'); // now creatsd a new case with new name (days)
//  break;                                 // after case an consle.log we braek
//  case 'friday':
//    console.log ('record viedo')         // const __ = '___'                       
//   break;                               // switch (___) {case '___': consple.log ('____')            }
//   case 'saturday':
//     console.log ('enjoy the weeken!')
//     break;
// }

//CODDING
//  let day= 'monday';
// if (day === 'monday'){
//   console.log ('go home');
// } else if ( day === 'tuesday'||  day=== 'wednesday'){
//   console.log ('writh a code');
// } else if (day ==='friday') {
//   console.log ('go home');
// } else if (day==='sunday' ||day=== 'saturday'){
//   console.log ('fun');
//  }
 
//statements and expressions /אמירות וביטויים

//expressions=> piece of code that produces a value/ חתיכת קוד שמייצרת ערך
//to example: 3+3, 1995, (true, false, !false= answer boolean value)

//expressions => bigger piece of code that executed which that not produces a value
//to example: if (23>10){  
//            const str = '23 is bigger'; <= str is is the expression}


//conditional operators \מותנים

//1//const age= 23
    // age >= 18       ?   console.log ( 'i like to dring win')  :    console.log ('i like to drink water')
//contiyion part//  if   //        if part                //  eles  //         eles part               //
 
// ? (if), : (eles)

//2// 
// const age= 23
// const drink = age>= 18? 'wine : 'water'
// consol.log (drink)

//3//
// const age= 23
// if (age>= 18) {
//   console.log ( 'win');
// }else if (age< 18){
// console.log ('water');
// }
 
// 4
// const age = 23
//  console.log (` i like to drink ${ age>= 18 ? 'win' : 'water' } `);

//CODDING

//אם אכל ב50-300 הטיפ 15% אם אחרת אכל הטיפ 20%
// להכין מחשב טיפים

// 1
// const BILL = 200;
// if (BILL>=50 && BILL <= 300){
//   console.log ('the tip is 15%');
// } else if (BILL<=50 && BILL >= 300) {
// console.log ('the tip is 20%');
// }

// // 1
// bill= 200;
// const tip= (BILL>=50 && BILL <= 300) ? '15%' : '20%';
// console.log (tip)

// 2 
//  const BILL = 200;
//  const tip= (BILL>=50 && BILL <= 300) ?  BILL* 0.15:
//  BILL*0.2;
//  console.log ( `'the bill was' ${ BILL}`, `'the tip was' ${ tip}`,
//  ` 'and the totale value' ${BILL+ tip}` );
 
// strict mode //

// 'use Strict'= we use that when we want to see th mistakes





































































































































 