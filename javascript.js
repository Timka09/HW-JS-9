// Task 1
const array = ["Max,", "Dima,", "Barys,", "Ola,", "Tima"]
let numaration = ""
function logItems(array) {
    for (let i = 0; i < array.length; i++){
        numaration += `${i} - ${array[i]}`
    }
    return numaration
} 
console.log(logItems(array))
// Task 2
const sentence = "Together we are stronger"
function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" "); 
    const numberOfWords = words.length; 
    return numberOfWords * pricePerWord;
}
console.log(calculateEngravingPrice(sentence, 10));  
// Task 3
const string = "Privet menya zovyt Tima"
const stringArray = string.split(" ")
let longestWord = ""
function findLongestWord(string) {
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > longestWord.length) {
            longestWord = stringArray[i]
        }
    }
    return longestWord
}
console.log(findLongestWord(stringArray))
// Task 4
const radok = "Bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
function formatString(string) {
    if (radok.length <= 40) {
        return radok
    } else {
       return radok.slice(0, 40) + "..."
    }
}
console.log(formatString(radok))
// Task 5
function checkForSpam(message) {
    const reworkingString = message.toLocaleLowerCase()
    if (reworkingString.includes("spam","sale")) {
        return false
    } else {
        return true
    }
}
console.log(checkForSpam("hello this is Spam, buy me for SALE!!!!"));
console.log(checkForSpam("hello this is me"));
// Task 6\
let numbers = [];
while (true) {
  let input = prompt("Введіть число:");
  if (input === null) {
    break;
  }
  if (isNaN(input) || input === "") {
    alert("Було введено не число, попробуйте ще раз");
  } else {
    numbers.push(Number(input));
  }
}
if (numbers.length > 0) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log("Не було введено жодного числа.");
}
