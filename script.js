let card = {
  color: "red",
  suite: "diamond",
  number: 3,
};

console.log(card.color);
console.log(card["number"]); // mer dynamisk

// Exercise 1
console.log("Exercise 1");
let book = {
  title: "Frankenstein",
  author: "Mary Shelley",
  numPages: 288,
};

console.log(book);

// Exercise 2
console.log("Exercise 2");

let books = [
  book,
  { title: "Gulliver's Travels", author: "Jonathan Swift", numPages: 292 },
  { title: "Little Women", author: "Louisa May Alcott", numPages: 248 },
  { title: "Dracula", author: "Bram Stoker", numPages: 400 },
];
console.log(books);

// Exercise 3
console.log("Exercise 3");

// let search = findBook(prompt("Input the title of a book to see if it is available:"), books);
// console.log(search);

function findBook(title, books) {
  for (item of books) {
    if (title === item["title"]) {
      return item;
    }
  }
  return null;
}

// Exercise Letter Frequency
console.log("Exercise Letter Frequency");
console.log(letterFrequency("kalle"));
console.log(letterFrequency("aaaa"));
console.log(letterFrequency("ni talar bra latin"));

function letterFrequency(str) {
  let frequency = {};

  for (char of str) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }
  return frequency;
}

// user register
console.log("Exercise User Register");

// filter by country
console.log("1) Filter by country");

console.log(filterByCountry(users, "FR"));

function filterByCountry(users, countryCode) {
  let filteredByCountry = [];
  for (user of users) {
    if (user.nat === countryCode) {
      filteredByCountry.push(user);
    }
  }
  return filteredByCountry;
}

//list Emails
console.log("2) List Emails");

console.log(listEmails(users));

function listEmails(users) {
  let emailList = [];
  for (user of users) {
    emailList.push(user.email);
  }
  return emailList;
}

// reformat emails
console.log("3) Reformat Emails");

// list of nationalites and corresponding country domains
const countryCodeDomains = {
  FR: ".fr",
  CH: ".ch",
  DE: ".de",
  NO: ".no",
  US: ".us",
  FI: ".fi",
  GB: ".uk",
  NL: ".nl",
  NZ: ".nz",
  AU: ".au",
  ES: ".ee",
  IE: ".ie",
  DK: ".dk",
  BR: ".br",
  CA: ".ca",
};

//calling function and logging output
console.log(reformatEmails(users));

function reformatEmails(users) {
  // array to contain the new emails
  let newEmails = [];

  // loop through all users
  for (user of users) {
    // to avoid problem with accents, different languages (and since previous emails included first & last name)
    let firstName = user.email.substring(0, user.email.indexOf("."));
    let lastName = user.email.substring(user.email.indexOf(".") + 1, user.email.indexOf("@"));

    // matching user nationality to country code
    let countryDomain = natToDomain(user.nat, countryCodeDomains);

    // push new email to newEmails array
    newEmails.push(`${lastName}.${firstName}@evilcorp${countryDomain}`.toLowerCase());
  }
  // return array
  return newEmails;
}

// matching nationality to country code
function natToDomain(nat, countryCodeDomains) {
  for (countryCode in countryCodeDomains) {
    if (nat === countryCode) {
      return countryCodeDomains[countryCode];
    }
  }
}
