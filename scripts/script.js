var bookshelf = new function() {
  this.element = document.getElementById('books');
  this.books = []

  this.Count = function(book) {
    var element = document.getElementById('bookcounter');
    var name = 'book'

    if (book) {
      if (book > 1) {
      name = 'books';
    }
      element.innherHTML = book + ' ' + name ;
    } else {
      element.innherHTML = 'No' + ' ' + name;
    }
  };

  this.showAll = function() {
    var book = '';

    if (this.books.length > 0) {
      for (i = 0; i < this.books.length ; i++) {
        book += '<tr>';
        book += '<td>' + this.books[i] + '<td>';
        book += '<tr>';
      }
    }

    this.Count(this.books.length);
    return this.element.innerHTML = book;
  };


    this.Add = function() {
      element = document.getElementById('a-book');

      var book = element.value;

      if (book) {
        this.books.push(book.trim());
        element.value = '';
        this.showAll();
      }
    };
};
