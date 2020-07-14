var wishlistedBooks = JSON.parse(localStorage.getItem("booksForWishlist"));
var existingDiv = document.getElementById("showItems");

function addToWishlist() {
    // var wishlistedBooks = JSON.parse(localStorage.getItem("booksForWishlist"));
    console.log(wishlistedBooks);
    wishlistedBooks.forEach(book => {

        var div = document.createElement('div');
        var frontCover = document.createElement("img");
        var detailsTitle = document.createElement("p");
        var detailsAuthor = document.createElement("p");
        var detailsPrice = document.createElement("p");
        var span = document.createElement("span");
        var btn = document.createElement("button");
        btn.className = 'btn_class';
        btn.textContent = 'Add to cart';
        span.className = 'remove_item';
        detailsPrice.className = 'price';

        frontCover.setAttribute("src", book.bookImage);
        detailsTitle.innerHTML = book.title;
        detailsAuthor.innerHTML = book.author.slice(15, -4);
        detailsPrice.innerHTML = book.price;

        existingDiv.appendChild(div);
        div.appendChild(frontCover);
        div.appendChild(detailsTitle);
        div.appendChild(detailsAuthor);
        div.appendChild(detailsPrice);
        div.appendChild(btn);
        div.appendChild(span);
    })
}

window.onload = addToWishlist();

////// REMOVE from wishlist

function removeFromWishlist(event) {
    if (event.target.className.includes("remove_item")) {
        var bookTitle = event.target.parentNode.childNodes[1].innerHTML;
        const result = wishlistedBooks.filter(book => book.title !== bookTitle);
        console.log(result);
        localStorage.setItem("booksForWishlist",JSON.stringify(result));
        console.log(localStorage);
        location.reload();
    }
}

existingDiv.addEventListener('click', removeFromWishlist);