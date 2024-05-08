interface Book {
  title: string;
  pageCount: number;
  available: boolean;
  genre: "fantasy" | "drama" | "sci-fi";
}

const library: Book[] = [
  {
    title: "Lord Of The Rings",
    pageCount: 500,
    available: true,
    genre: "fantasy",
  },
  {
    title: "Lord Of The Rings: Return Of The King",
    pageCount: 700,
    available: false,
    genre: "fantasy",
  },
  {
    title: "Fifty Shades Of Grey",
    pageCount: 300,
    available: true,
    genre: "drama",
  },
  {
    title: "Halo",
    pageCount: 200,
    genre: "sci-fi",
    available: false,
  },
];

const filterAvailableBooks = (books: Book[]): Book[] => {
  let filteredBooks: Book[] = [];

  for (let i = 0; i < books.length; i++) {
    if (books[i].available === true) {
      filteredBooks.push(books[i]);
    }
  }

  return filteredBooks;
};

const filterLongBooks = (books: Book[]): Book[] => {
  let filteredBooks: Book[] = [];

  for (let i = 0; i < books.length; i++) {
    if (books[i].pageCount > 499 && books[i].genre === "fantasy") {
      filteredBooks.push(books[i]);
    }
  }

  return filteredBooks;
};

// filterAvailableBooks(library);
// console.log("Available books:");
// console.log(filterAvailableBooks(library));
// console.log("Long books:");
// console.log(filterLongBooks(library));

const availableBooks: Book[] = library.filter(
  (book) => book.available === true
);

const removeBook = (book: Book): Book[] => {
  return library.filter((item) => item.title !== book.title);
};

removeBook({
  title: "Halo",
  pageCount: 200,
  genre: "sci-fi",
  available: false,
});

const longBooks: Book[] = library.filter((book) => book.pageCount > 499);

const longFantasyBooks: Book[] = library.filter(
  (book) => book.pageCount > 600 && book.genre === "fantasy"
);

// console.log(availableBooks);
// console.log(longBooks);
// console.log(longFantasyBooks);

const findAvailableBook = (books: Book[]): Book | undefined => {
  for (let i = 0; i < books.length; i++) {
    if (books[i].available === true) {
      return books[i];
    }
  }
};

// const availableBook = findAvailableBook(library);

// if (availableBook !== undefined) {
//   console.log(availableBook.title);
// } else {
//   console.log("No available books");
// }

const availableBook = library.find((book) => book.available === true);
// console.log(availableBooks);
// console.log(availableBook);

const namesOfBooks = library.map((book) => book.title);
// console.log(namesOfBooks);

// const allBooksAvailable = library.map((book) => (book = true));
const allBooksAvailable = library.map((book) => {
  book.available = true;
  // book.title = book.title.toUpperCase();
  return book;
});
console.log(allBooksAvailable);
