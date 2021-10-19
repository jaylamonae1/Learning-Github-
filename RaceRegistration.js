// This is me doing some refresher courses for my full stack developer certifications 


let raceNumber = Math.floor(Math.random() * 1000);
let runnerRegisteredEarly = true;
let runnerAge = 18;

/* switch (raceNumber){
  case (runnerRegisteredEarly && runnerAge >= 18) :
  raceNumber += 1000;
  console.log (`Your Race Number is : ${raceNumber} `);
  break;
 
}
*/
if (runnerRegisteredEarly && runnerAge >= 19) {
console.log(`Your Race Number is  ${raceNumber += 1000}`);
 }
 else if (runnerAge <=17 ){
   console.log (`Your Registration is at 12:30 pm (regardless of registration) ! `);
 }
else if (runnerAge === 18) { 
  console.log(`Please see the Registration Desk for more assistance !`);
}
 else {
  console.log(`Your Race Number is ${raceNumber -= 1}`);
}
