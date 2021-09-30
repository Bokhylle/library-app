function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
      let readStatus;
      if (this.read){
        readStatus = 'has been read';
      } else {
        readStatus = 'has not been read yet';
      }
      return `${this.title} by ${this.author}, ${pages} pages, ${readStatus}!`
    }
  }
  const dune = new Book('Dune', 'Frank Herbert', 432, true)