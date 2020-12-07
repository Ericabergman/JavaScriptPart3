// FIRST ASSIGNMENT

// Vi har två lag som ska tävla mot varandra. Lage kommer att
// spela tre rundor. Laget med högsta poäång vinner!
// DATA OG: 96, 108, 89
// DATA ALLIANCE: 88, 91, 110
// 1. Räkna ut medlevärdet för varje lag. Plussa ihop varje lags resultat
// dela resultatet på 2
// 2. Jämföra de båda lagens resultate för att avgöra vilket som är högst
// för att kunna jämföra resultaten behöver vi använda större än operator,
// vi behöver använda en if-sats som skriver ut resultatet beroende på vem som 
// är vinnaren. 

// steg 1: två variabler som innehåller varje lags data
// steg 1.1: skapa två nya variabler som innehåller medelvärdet
// steg 2: skapa en if-sats och avgöra vilket medelvärde som är högst

// 1: Först definierar du vad du ska utföra
// 2: Definierar du vilka steg rent kodmässigt du behöver genomföra
// 3: Skriv ner vilken ordning du behöver utföra stegen
// 4: Om något känns svårt och övermäktigt ta bort ett steg eller en del
// till en början och kom tillbaka till det sen. 



// const result = 10 + 10 + 10;
// const result2 = 5 + 5 + 5;

// const avrageResult = result / 2;
// const averageResult2 = result2 / 2;

//console.log(result, result2);
//console.log(avrageResult, averageResult2);

// if (avrageResult > averageResult2) {
//  console.log("GRATTIS OG");
// } else {
//  console.log("GRATTIS ALLIANCE");
// }




// operator precedence
// template literals


//if statement
// const age = 19;
// const isOfAge = age >= 18;

// if (isOfAge) {
//     console.log("YAY! you can take your drivers licens!!!");
// } else { 
//     console.log("sorry come back in a few years!");
// }


// type coersion och cenversion
// automatioskt konterterar 

//dynamiska värden = vi behöver inte tala om för javascript att vi ska konvertera

/*TYPE COERSION & CONVERSION

TYPE COERSION = manuellt

const inputYear = '1993';    //'allt innanför'=string 
console.log(typeof inputYear);

console.log(inputYear + 15);

console.log(Number(inputYear) + 15);

console.log(String(25));


CONVERSION = automatiskt
console.log("i am " + 35 + " years old");

console.log('23' - '10' - 3); // COERISON
console.log('a' - '10' - 3); 
console.log('23' + '10' + 3); // NO COERISON

console.log('23' > '18');*/



// THRUTHY & FALSE VALUES
// FINNS 5 FALSY VALUES: 0,'', undefined, NaN, null

// let height;
// if (height) {
//     console.log("YAY! it´s defined");
// } else {
//     console.log("height is undefied");
// }



// EQUALITY OPERATORS 

//const age = '18';
//if (age === 18)console.log("you just became an adult!");
// 18 === 18

// 3 equal is strict will never use type coersion 
// 2 aqual does actually do type coersoin 

// '18' == 18 undvik 2 använd alltid strict annars blir det buggar. Undvik så mycket det bara går

/*const number = 25;
if (number !== 20)console.log("hejhej");
använd !==

använd aldrig ==
vi ska använda strict equality vilket innnebär att vi ska använda ===*/




//LEktion 3
// const hasDriversLicense = true;
// const hasGoodVision = true;
// const isTired = true;
// deklarerat två veriabler av data typen boolean och anget värdet true

// console.log(hasDriversLicense && hasGoodVision);
// && = och 

// console.log(hasDriversLicense || hasGoodVision);
// || = eller




//begöver ha ett värder framför varje
// console.log(!hasDriversLicense);
// console.log(!hasDriversLicense && !hasGoodVision );

// if (hasGoodVision && hasDriversLicense && !isTired) {
//     console.log("You are able to drive!");
// } else {
//     console.log("some else should drive");
// }


// if (hasGoodVision && hasGoodVision && !isTired);




// SWITCH STATEMENT

// const day = "monday";

// switch (day) {
//     case "monday": // day === 'monday notice the : its not ;
//         console.log("Plan course struckture");
//         break;
//     case "tuesday":
//         console.log("prepare theory lessons");
//         break;
//     case"wednsday":
//     case "thursday":
//         console.log("write code exampels");
//         break;
//     case "friday":
//         console.log("Give the students feedback");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekwend");
//         break;
//         default:
//     console.log("Not a valid day");          
//}

// förfök att skriva om detta till en if-sats för att se vad som händer
// använd inte och eller. det kan inte finnas 2 vika dana dagar.

// || bra att använda vid en if-sats



// statements & expression

//EXPRESSION

// an expression in a piece of code that produces a value

//exempel 3 + 4  producerar ett värde // expression

1992 // also an expression


true && false && !false // also expression because it produce a boolian 


// STATEMENT 
// statment IS LIKE A BOGGER pice of code wich does not produce a value 


// statement
// ungefär som en hel mening 
// ordn som bygger meningen är som expressions

// if (23 > 10) {
//     const str = "23 is bigger";
//     if is a statement it preforms an actions in our code
//  the string "23 is bigger" is the expression
// }

// we can write expressions in template litterals
// we can not write statements in template literals


// The CONDITIONAL OPERATOR = TERNARY
// WE HAVE used 2 ways of writing conditionals (if/else & switch) but there is another way 
// Ternary lets us write it all in one line

// TERNARY = vi måste berätta vad som ska hända 
// TERNARY operator is built with three parts: condition, if part and els part

//TERNARY can only validate one condition and it has to be either the : or after
