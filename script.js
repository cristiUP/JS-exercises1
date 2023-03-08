// Task 1
// Check if a string is uppercase.

// Example:
// Input: upperCaseString = "The quick brown fox jumps over the lazy dog"
// Expected Result: false
// Input: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"
// Expected Result: true
function task1(i) {
  let myP = document.getElementsByName("task1"); // citesc variabila myP toate elementele cu numele task1
  function isUpperCase(string) {
    //functia pentru a determina daca literele sunt mari sau mici
    return string.toUpperCase() === string;
  }

  // for (let i = 0; i < myP.length; i++) {
  // Initial am avut un singur buton si le verificam pe amandoua dintr-un click, acum il comentez ca nu-si mai are rostul

  if (isUpperCase(myP[i].innerHTML)) {
    console.log(isUpperCase(myP[i].innerHTML) + "! " + myP[i].innerHTML);
    document.getElementById("result").innerHTML = "Your text is upper case!";
    return;
  } else {
    console.log(isUpperCase(myP[i].innerHTML) + "! " + myP[i].innerHTML);
    document.getElementById("result").innerHTML =
      "Your text is not upper case!";
  }
}
// }

// Task 2
// Remove the spaces from the string, then log the resultant string.

// Example:
// Input: noSpacesString = "The quick brown fox jumps over the lazy dog"
// Expected Result: "Thequickbrownfoxjumpsoverthelazydog"

function task2() {
  let myString = document.getElementById("myString").value; // citesc textul din input la apasare de buton
  console.log(myString); // tiparesc textul in consola
  myString = myString.replace(/ /g, ""); // folosesc metoda .replace cu atributul global /g ca sa inlocuisc toate caracterele de ' ' cu ''
  console.log(myString); // tiparesc noul text in consola
  document.getElementById("resultTask2").innerHTML = myString; // si dau raspunsul in html...
}

// Task 3
// Calculate the sum of 2 numbers and log the result.

// Example:
// Input: a = 2 , b = 3
// Expected Result: sum = 5

function task3() {
  // functia pentru adunarea celor doua numere
  // voi folosi parseInt pentru ca .value inregistreaza String, asa ca il convertesc in number cu parseInt
  let a = parseInt(document.getElementById("firstNumber").value);
  let b = parseInt(document.getElementById("secondNumber").value);
  console.log("The sum of your numbers is: " + (a + b)); // tiparesc suma in consola
  document.getElementById("resultTask3").innerHTML = a + b; // returnez suma in paragraful din html conceput pentru asta
}

// Task 4
// Return the square root of a number n .

// Example:
// Input: n = 9
// Expected Result: sqrt = 3

// folosesc direct Math.sqrt
function task4() {
  let n = parseFloat(document.getElementById("square").value);
  console.log(Math.sqrt(n));
  document.getElementById("resultTask4").innerHTML = Math.sqrt(n);
}

// Task 5
// Log to the console your current age.

// Example:
// Input: year = 1990
// Expected Result: "You are ${x} years old"

// Folosesc new Date().getFullYear() ca sa aflu anul curent din care scad anul introdus in input-ul din html

function task5() {
  let birthYear = parseInt(document.getElementById("birthYear").value);
  let x = new Date().getFullYear() - birthYear;
  console.log(`You are ${x} years old`);
  document.getElementById("resultTask5").innerHTML = `You are ${x} years old`;
}

// Task 6
// Given 2 variables, return the value of the second variable, multiplied as many times as the value of the first.

// Example:
// Input: count = 5, multiplyString = "Hello"
// Expected Result: "HelloHelloHelloHelloHello"

//  o sa folosesc versiunea cu metoda de .repeat() ca sa nu mai folosesc inca o variabila
//  mai mergea cu for, numaram cu o variabila si faceam o variabila noua in care aduagam stringT6 la fiecare loop.
function task6() {
  let count = parseInt(document.getElementById("count").value);
  let stringT6 = document.getElementById("stringT6").value;
  console.log(stringT6.repeat(count));
  document.getElementById("resultTask6").innerHTML = stringT6.repeat(count);
}

// Task 7
// Convert a binary number (given as a string) to a decimal number.

// Example:
// Input: binaryString = "11111100110"
// Expected Result: 2021 ! <- Nu pot! pentru ca 11111100110 = 2022

function task7() {
  let binaryString = parseInt(document.getElementById("binaryNumber").value, 2);
  // aici folosesc direct parametrul radix pentru baza al lui parseInt atunci cand aduc string-ul din input
  console.log(binaryString);
  document.getElementById("resultTask7").innerHTML = binaryString;

  // ca sa nu mai folosesc nici o variabila as fi putut sa scriu direct:
  // console.log(parseInt(document.getElementById('binaryNumber').value, 2));
  // document.getElementById("resultTask7").innerHTML = parseInt(document.getElementById('binaryNumber').value, 2);
}

// TASK 8
// Return the final number, at the given power.

// Example:
// Input: pow = 4, nr = 2
// Expected Result: 16
// Input: pow = 3, nr = 3
// Expected Result: 27

// Asta e exact ca si task-ul 4 doar ca folosim .pow in loc de .sqrt

function task8() {
  let x = parseFloat(document.getElementById("numberT8").value);
  let y = parseFloat(document.getElementById("powerT8").value);
  console.log(Math.pow(x, y));
  document.getElementById("resultTask8").innerHTML = Math.pow(x, y);
}

// TASK 9
// Reverse a string

// Example:
// Input: revString = "alabala"
// Expected Result: "alabala"
// Input: revString = "ItFactory"
// Expected Result: "yrotcaFtI"

// am gasit mai multe variante, am ales asta cu cu for pentru ca mi s-a parut cea mai simpla si mai curata.
//
function task9() {
  let myStringT9 = document.getElementById("myStringT9").value;
  let myReversedString = "";
  for (var i = myStringT9.length - 1; i >= 0; i--) {
    myReversedString += myStringT9[i];
  }
  console.log(myReversedString);
  document.getElementById("resultTask9").innerHTML = myReversedString;
}

// Task 10
// Remove a certain letter from a string

// Example:
// Input: letter = "a" removeString = "Today was a good day"
// Expected Result: Tody ws good dy

// La inceput am crezut ca e copy/paste din task2, pe urma mi-am prins urechile cu tipul variabelei din string in object

function task10() {
  let myStringT10 = document.getElementById("myStringT10").value; // citesc textul din input la apasare de buton
  let myLetterT10 = new RegExp(
    `${document.getElementById("myLetterT10").value}`,
    "gi"
  ); // citesc litera pentru sters
  // am incaruntit pana am gasit cum sa-l fac pe myLetterT10 sa fie obiect si nu string ca sa il pot folosi mai hos in replaceAll

  console.log(myStringT10); // tiparesc textul in consola
  console.log(typeof myLetterT10, myLetterT10); // il trimit in consola sa il vad daca e bine si daca e object

  newstring = myStringT10.replaceAll(myLetterT10, ""); // aici folosesc replaceAll
  console.log(newstring); // tiparesc noul text in consola
  document.getElementById("resultTask10").innerHTML = newstring; // si dau raspunsul in html...
}
