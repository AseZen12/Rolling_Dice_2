/*
 The newDice function takes to parameters:
  num1: the number of the first dice.
  num2: the number of the second dice.
 This function updates the images of two dice with the corresponding that come from the parameters num1 and num2. 
 It also updates the alternate title of the images, caculates the total value of the dice roll and updates the total value.
*/
function newDice(num1,num2,total){
   const dice1 = document.getElementById('dice1');
   const dice2 = document.getElementById('dice2');
   dice1.setAttribute("src","Images/Dice_" + num1 + ".png");
   dice2.setAttribute("src","Images/Dice_"+ num2 +  ".png");
   dice1.setAttribute("alt","Dice with number " + num1);
   dice2.setAttribute("alt","Dice with number " + num2);
   const para = document.getElementById("rollTotal");
   para.textContent = `Total Value of Your Roll: ${total}`;
}
/*
The roll function generates a random number between 1 and 6.
*/
function roll(){
    return Math.floor(Math.random()*6 + 1);
}
/*
The diceRoll function creates two variables called roll_1 and roll_2 that each represent one roll().
It also creates a third varaible called total that stores the total value of the two rolls.
Then it makes a call to the newDice passing roll_1, roll_2, and total as parametters to function.
*/
function diceRoll(){   
 const roll_1 = roll();
 const roll_2 = roll();
 const total = roll_1 + roll_2;
 newDice(roll_1,roll_2,total);    
}

document.querySelector('button').addEventListener("click",diceRoll);