function getTotalBooksCount(books) {
  return books.length 
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return books.reduce((borrowedCount, book) => {
    return borrowedCount + (book.borrows[0].returned === false ? 1 : 0);
  }, 0);
}

// helper function
function findGenre(result, genre) {
  return result.find((existingGenre) => existingGenre.name === genre);
}
// end function
function getMostCommonGenres(books) {
  let result = [];

  books.forEach((book) => {
    let genreExists = findGenre(result, book.genre);

    if (!genreExists) {
      result.push({ name: book.genre, count: 1 });
    } else {
      genreExists.count += 1;
    }
  });

  return result.sort((genre1, genre2) => genre2.count - genre1.count).slice(0, 5);
}


function getMostPopularBooks(books) {
  const result = books.map((book) => {
    const popularityInfo = {
      name: book.title,
      count: book.borrows.length,
    };

    return popularityInfo;
  })
  return result.sort((titleA, titleB) => titleB.count - titleA.count).splice(0,5);
}


function getMostPopularAuthors(books, authors) {
  let result = authors.map((author) => {
    const fullName = `${author.name.first} ${author.name.last}`;
    const booksByAuthor = books.filter((book) => book.authorId === author.id);
    const totalBorrows = booksByAuthor.reduce((accum, book) => accum + book.borrows.length, 0);
    const newAuthorInfo = {
      name: fullName,
      count: totalBorrows,
    };

    return newAuthorInfo;
  })
  return result.sort((authorA, authorB) => authorB.count - authorA.count).splice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
