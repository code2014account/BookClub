
var bookshelf = new function() {
  this.el = document.getElementById('books');
  this.books = [];

  this.Count = function(book) {
    var element = document.getElementById('bookcounter');
    var name = 'title'

    if (book) {
      if (book > 1) {
      name = 'title';
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
        book += '<td><button onclick="bookshelf.Edit(' + i + ')">Change Title</button></td>';
        book += '<td><button onclick="bookshelf.Delete(' + i + ')">Delete Book</button></td>';
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

    this.Edit = function(trash) {
      var elemento = document.getElementById('edit-name');
      elemento.value = this.books[trash];

      document.getElementById('impala').style.display = 'block';
      self = this;

      document.getElementById('impala').style.display = function() {
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
