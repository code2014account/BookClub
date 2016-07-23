
var bookshelf = new function() {
  this.elemento = document.getElementById('books');
  this.books = [];

  this.Count = function(abook) {
    var elemento = document.getElementById('bookcounter');
    var name = 'book'

    if (abook) {
      if (abook > 1) {
      name = 'title';
    }
      elemento.innherHTML = abook + ' ' + name ;
    } else {
      elemento.innherHTML = 'No' + ' ' + name;
    }
  };

  this.Add = function() {
    elemento = document.getElementById('a-book');

    var book = elemento.value;

    if (book) {
      this.books.push(book.trim());
      elemento.value = '';
      this.showAll();
    }
  };

  this.showAll = function() {
    var abook = '';

    if (this.books.length > 0) {
      for (i = 0; i < this.books.length ; i++) {
        abook += '<tr>';
        abook += '<td>' + this.books[i] + '<td>';
        abook += '<tr>';
        abook += '<td><button onclick="bookshelf.Edit(' + i + ')">Change Title</button></td>';
        abook += '<td><button onclick="bookshelf.Delete(' + i + ')">Delete Book</button></td>';
      }
    }
    this.Count(this.books.length);
    return this.elemento.innerHTML = abook;
  };


    this.Edit = function(trash) {
      var elemento = document.getElementById('edit-book');
      elemento.value = this.books[trash];

      document.getElementById('impala').style.display = 'block';
      self = this;

      document.getElementById('saveEdit').onsubmit = function() {
        var book = elemento.value;

        if (book) {
          self.books.splice(trash, 1, book.trim());
          self.showAll();
          closeInput();
        }
      }
    };

    this.Delete = function(trash) {
      this.books.splice(trash, 1);
      this.showAll();
    };
}

bookshelf.showAll();

function closeInput() {
  document.getElementById('impala').style.display = 'none';
}
