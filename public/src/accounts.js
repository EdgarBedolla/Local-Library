function findAccountById(accounts, id) {
  const idMatch = accounts.find((account) => account.id === id)
  return idMatch
}


function sortAccountsByLastName(accounts) {
  let sortedAccs = accounts.sort((account1, account2) => account1.name.last.toLowerCase() < account2.name.last.toLowerCase() ? -1 : 1)
return sortedAccs
}

function getTotalNumberOfBorrows(account, books) { const accountId = account.id
  return books.reduce((totalBorrows, book) => {
    const accountBorrows = book.borrows.filter((borrow) => borrow.id === accountId)
    return totalBorrows + accountBorrows.length
  }, 0)
}

function getBooksPossessedByAccount(account, books, authors) {
  const booksOut = books.filter((book) => book.borrows.some(borrow => !borrow.returned && borrow.id === account.id))
  
  const result = booksOut.map((book) => {
    const author = authors.find((author) => author.id === book.authorId)
  return {...book, author}
})
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};