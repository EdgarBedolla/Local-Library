function findAuthorById(authors, id) {
  const idMatch = authors.find((author) => author.id === id)
  return idMatch
}

function findBookById(books, id) {
  for (let bookIndex in books) {
    let book = books[bookIndex];
    if (book.id === id) {
      return book;
    }
  }
  return null;
}

function partitionBooksByBorrowedStatus(books) {
  let checkedOut = []
  let returned = []
  for (let bookIndex in books){
    const book = books[bookIndex]
    const isReturned = book.borrows[0].returned
    
    if (isReturned){
      returned.push(book)
    } else {
      checkedOut.push(book)
    }
}
  return [checkedOut, returned]
}


function getBorrowersForBook(book, accounts) {
  const borrowers = book.borrows.map ((borrow) => {
    const account = accounts.find((account) => account.id === borrow.id)
    return {...account, returned: borrow.returned}
  })
  return borrowers.slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
