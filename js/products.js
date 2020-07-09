function loadProductsFromJson() {
    const requestURL = './../web/json/products.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.onload = function () {
        var library = JSON.parse(request.responseText);
        createContentFromJson(library);
    };
    request.send();
}

document.addEventListener("DOMContentLoaded", function () {
    loadProductsFromJson();
});


function createContentFromJson(library) {
    var booksContainer = document.getElementById("books")
    library.forEach(function (book) {
        //create elements
        var divBookDetails = document.createElement("div");
        var prodDetailsAncor = document.createElement("a");
        var bookCover = document.createElement("img");
        var title = document.createElement("p");
        var author = document.createElement("p");
        var price = document.createElement("p");
        var addToBasket = document.createElement("button");


        //setting attributes
        divBookDetails.setAttribute("class", "book-details-container");
        prodDetailsAncor.setAttribute("href", "./product_details.html");
        bookCover.setAttribute("src", book.cover);
        bookCover.setAttribute("class", "book-cover");
        title.innerText = book.title;
        title.style.fontWeight = "bold";
        author.innerText = book.author;
        price.innerText = book.price;
        price.setAttribute("class","price");
        addToBasket.innerHTML = "Add to basket";
        addToBasket.setAttribute("type","button");

        //append elements
        booksContainer.appendChild(divBookDetails);
        divBookDetails.appendChild(prodDetailsAncor);
        prodDetailsAncor.appendChild(bookCover);
        divBookDetails.appendChild(title);
        divBookDetails.appendChild(author);
        divBookDetails.appendChild(price);
        divBookDetails.appendChild(addToBasket);

        ///styling
        // item.style.display = "flex";
        // item.style.justifyContent = "space-between";
        // item.style.alignItems = "center";
        // item.style.marginBottom = "10px";
        // bookCover.style.Width = "100px";
        // bookCover.style.height = "150px";


        //append each li to ul
        //document.getElementById("book-list").appendChild(item);
    });
}