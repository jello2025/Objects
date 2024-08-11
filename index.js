const book = {
  title: "JavaScript: The Definitive Guide",
  author: "David Flanagan",
  publishedYear: 2020,
  genre: "Programming",
};

console.log(book.title);

book.pageCount = 1096;

console.log(book.pageCount);

book.isbn = "978-1491952023";

console.log(book.isbn);

book.publishedYear = 2021;

console.log(book.publishedYear);

book.author = ["David Flanagan", "James clear"];

console.log(book.author);

//Start with one review: {reviewer: "Book Critic", comment: "A comprehensive guide to JavaScript."}

book.reviews = [
  {
    reviewier: "jessicadacoolest2022",
    comment: "such an amazing book",
  },
];

console.log(book.reviews);

console.log(book);
