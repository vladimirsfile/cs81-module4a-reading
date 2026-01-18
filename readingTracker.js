// Weekly reading log

const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

// Adds a new reading entry to the log, which is array of objects.
// The function takes 3 parameters - the day of the week, the title of 
// the book, and the number of minutes read. The data for the day of the
// week and the title of the book is stored as strings. The data for the
// minutes read is stored as numbers. 

//The function adds adds the data to the readingLog. 
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes };
  // the function adds the new entry using the push method.
  readingLog.push(newEntry);
}

// Returns total minutes spent reading all week
// Thhis function takes minutes as a parameter. This data is stored as 
// numbers. It loops through the log and adds the total minutes for the week.
function totalReadingMinutes(log) {
  let total = 0;
  for (let entry of log) {
    total += entry.minutes;
  }
  return total;
}

// Returns the book read most frequently
// The function calculates which book appears the most. 
// The result is string - the book title.
// The for loop goes through the logs and builds the 
// tally list - bookCounts.
function mostReadBook(log) {
  const bookCounts = {};
  for (let entry of log) {
    if (!bookCounts[entry.book]) {
      bookCounts[entry.book] = 1;
    } else {
      bookCounts[entry.book]++;
    }
  }

// This for loop now iterates over the titls that we accumulated
// from the loop above. 
  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}

// Prints a summary of minutes read per day
// This function goes over the log and prints out a summary of
// all reading activities. 
// The for loop goes over the day, the minutes, and the title of 
// each one of the objects in the log. 
function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}

// Example usage
addReadBook("Saturday", "Dune", 50);
printDailySummary(readingLog);
console.log("Total minutes read:", totalReadingMinutes(readingLog));
console.log("Most read book:", mostReadBook(readingLog));


// Calling the addReadBook function with the last day of the week - Sunday.
// I chose "Floquent JavaScript".
addReadBook("Sunday", "Floquent JavaScript", 77);
console.log("The most read book after the last update" + mostReadBook(readingLog));