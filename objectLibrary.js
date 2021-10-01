function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
      let readStatus;
      if (this.read){
        readStatus = 'Read';
      } else {
        readStatus = 'Not read';
      }
      return `Author: ${this.author}\r\nNumber of pages: ${pages}`
    }
    this.readBtn = toggleRead => this.read ? this.read = false : this.read = true
  }
  
  const dune = new Book('Dune', 'Frank Herbert', 432, true);
  const LOTR = new Book('Lord of The Rings', 'J.R.R Tolkien', 1255, true);
  let library = [dune, LOTR, ];
  
  
  //form
const formBtn = document.getElementById('displayBookForm');
  const formBox = document.getElementById('form-container')
const newBookForm = document.querySelector('#new-book-form')
const libraryBtn = document.getElementById('library');
newBookForm.addEventListener('submit', function(b){
  let e = bookForm
  let read = document.querySelector('#read:checked') !== null
  console.log(read)
  let book =  new Book(e.title.value, e.author.value, parseInt(e.pages.value), read)
  b.preventDefault()
  e.reset()
  formBox.classList.toggle('hidden');
  return library.push(book)
});
formBtn.onclick = function() {
  formBox.classList.toggle('hidden')
}



  function addBookToLibrary(book) {
    return library.push(book)
  };
  const cardHolder = document.getElementById('book-card-holder');
  const bookCard = document.createElement('div');
  const deleteEntryBtn = document.createElement('div');
  const bookInfoHeader = document.createElement('h1');
  const bookInfo = document.createElement('p');
  const readBtn = document.createElement('button');
  const readBanner = document.createElement('div');
  function createBookCard(book, i) {

    let clonedCard = bookCard.cloneNode();
    let clonedBtn = deleteEntryBtn.cloneNode();
    let clonedHeader = bookInfoHeader.cloneNode();
    let clonedInfo = bookInfo.cloneNode();
    let clonedReadBtn = readBtn.cloneNode();
    let clonedReadBanner = readBanner.cloneNode();
    clonedCard.setAttribute('data-key', i)
    clonedReadBanner.setAttribute('data-key', i + 'a')
    clonedCard.classList.add('card');
    clonedBtn.classList.add('deleteBtn');
    clonedHeader.classList.add('card-info');
    clonedInfo.classList.add('card-info');
    clonedReadBanner.classList.add('readBanner')
    clonedHeader.textContent = book.title
    clonedInfo.textContent = book.info()
    clonedReadBanner.textContent = 'READ'
    clonedReadBtn.classList.add('readBtn')
    clonedReadBtn.onclick = readBook
    clonedBtn.onclick = deleteBook
    if(book.read){
      clonedReadBtn.textContent = 'Not Read';
    } else {

      clonedReadBtn.textContent = 'Read';
      clonedReadBanner.classList.add('hidden');
    }
    clonedCard.appendChild(clonedBtn);
    clonedCard.appendChild(clonedHeader);
    clonedCard.appendChild(clonedInfo);
    clonedCard.appendChild(clonedReadBtn);
    clonedCard.appendChild(clonedReadBanner);
    cardHolder.appendChild(clonedCard);
};
function clearCards() {
  while (cardHolder.firstElementChild) {
    cardHolder.removeChild(cardHolder.lastElementChild)
  }
}
function displayBooks(library) {
  clearCards();
  for(let i = 0; i < library.length; i++) {
    createBookCard(library[i], i)
  }
}
function deleteBook() {
  library.splice(this.parentElement.getAttribute('data-key'), 1);
  cardHolder.removeChild(this.parentElement)
}
function readBook() {
  bookPosition = library[this.parentElement.getAttribute('data-key')]
  let readBanner = this.parentElement.getAttribute('data-key') + 'a'
  if(bookPosition.read){
    this.textContent = 'Read';
    document.querySelector(`[data-key='${readBanner}']`).classList.add('hidden')
  } else {
    this.textContent = 'Not Read';
    document.querySelector(`[data-key='${readBanner}']`).classList.remove('hidden')
  }
  bookPosition.readBtn()

}
libraryBtn.onclick = function () {
  displayBooks(library)
}