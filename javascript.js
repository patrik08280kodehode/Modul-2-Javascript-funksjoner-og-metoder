/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

// Skriv koden for oppgave 1 her
const checkOddOrEven = (num) => {
  return num % 2 === 0 ? "the number is even" : "the number is odd"; // I return the number then check if it can be divided by 2 then it checks if its 0, if it is 0 then it must be an even number.
};

console.log(checkOddOrEven(2));
console.log(checkOddOrEven(5));
// For this one i used arrow function.
/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

// Skriv koden for oppgave 2 her

function upperCaseConvert(text) {
  // i used function here.
  return text.toUpperCase() + "!";
  // here i return the first line then used the .toUpperCase to make it uppercase and + "!" to give it a exclamation mark behind
}
let newText = "dette er kult";
console.log(upperCaseConvert(newText));
// here i just made it have a new string to become uppercase then paste it with console.log
/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.
Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/
// Skriv koden for oppgave 3 her

// function for giving greeting depending on name and time
function greeting(name, time) {
  // if its under 0 its "ugyldig"
  if (time < 0) {
    return "Ugyldig tid";
  }
  // if time is undefined then "feilmelding"
  if (time === undefined) {
    return "Feilmelding";
  }
  // if time greater than or equal to zero, less or equal to 5 then "god natt"
  if (time >= 0 && time <= 5) {
    return `God natt ${name}`;
  }
  // if time greater than or equal to 6, less or equal to 11 then "god morgen"
  if (time >= 6 && time <= 11) {
    return `God morgen ${name}`;
  }
  // if time greater than or equal to 12, less or equal to 17 then "god dag"
  if (time >= 12 && time <= 17) {
    return `God dag ${name}`;
  }
  // if time greater than or equal to 18, less or equal to 23 then "god kveld"
  if (time >= 18 && time <= 23) {
    return `God kveld ${name}`;
  }
  // if its above 23 its "ugyldig"
  if (time >= 23) {
    return "ugyldig tid";
  }
}

console.log(greeting("Bob", 7));
/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

// Skriv koden for oppgave 4 her

function sliced(array) {
  return array.slice(1, 3);
}
// i used function here and the .slice to remove parts of the array
const array = ["Rød", "Grønn", "Blå", "Gul"];
let newArray = sliced(array);
console.log(newArray);
// i made an array and a newArray to slice it then paste it into the console
/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

// Skriv koden for oppgave 5 her

// storing "phrases" in strings
const javascriptExample = "  Javascript er vanskelig  ";
const metoderExample = " Det er vanskelig å bruke metoder ";
const vanskeligExample = "  Vanskelig    ";

// function where i .replace vanskelig with gøy then . trim to remove whitespace
function updatePhrase(phrase) {
  return phrase.replace("vanskelig", "gøy").trim();
}

console.log(updatePhrase(javascriptExample));
console.log(updatePhrase(metoderExample));
console.log(updatePhrase(vanskeligExample));
// pasted all examples with updatedPhrase

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

/*******************************************************************************
 Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen.

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

// Skriv koden for oppgave 6 her
const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];
// i create a function where im gonna slice, replace and splice different items.
function changeItems(arr) {
  const result = arr.slice(0);
  // const for slicing "bok"
  const replaced = result.with(3, "Linjal");
  //const for replacing "viskelær"
  replaced.splice(0, 3, "Markeringspenn", "Markeringspenn");

  return replaced;
}
//return at end to solve the function

const newItems = changeItems(items);
console.log(newItems);
/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

// Skriv koden for oppgave 7 her

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

// Skriv koden for oppgave 8 her
