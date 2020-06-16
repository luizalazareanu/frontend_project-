// var books=[
//     {
//         img: "./../images/book_covers/this_must_be_the_place.jpg",
//         title:"This Must Be the Place",
//         autor:"Maggie O'Farrell",
//         price: "7.89",
//     },
//     {
//         img: "./../images/book_covers/underground.jpg",
//         title:"The Underground Railroad",
//         autor:"Colson Whitehead",
//         price: "9,98",
//     },
// ];

function loadProductsFromJson() {
    const requestURL = './../web/json/products.json';
    const request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.onload = function () {
        const books = JSON.parse(request.responseText);
        createContentFromJson(books);
    };
    request.send();
}

// document.addEventListener("DOMContentLoaded", function () {
//     loadProductsFromJson();
// });

document.getElementById('json-btn').addEventListener('click', function(){
    loadProductsFromJson();
});

function createContentFromJson(books){
    var output="<div class='item' id='item'>";

    for (var i in books) {

        // if (books[i].title === "This Must Be the Place") {
            output += "<div id='item "+i+ "'>" +"<p>" + books[i].title + "</p> " + "<p>" + books[i].author + "</p>" + "<p>" + books[i].price + "</p>"+"</div>";

        // }

    }
    output+="</div>";
    document.getElementById("showTable").innerHTML=output;

    for(var j in books) {
        var img = document.createElement("img");
        img.src = books[j].img;
        // document.getElementById('item').appendChild(img);
        var abc = 'item ' + j;
        var parent = document.getElementById(abc);
        parent.insertBefore(img,parent.firstChild);
    }

    for(var k in books) {
        var btn = document.createElement("button");
        btn.className = 'btn_class';
        btn.textContent = 'Add to cart';
        var asd = 'item ' + k;
        document.getElementById(asd).appendChild(btn);
    }
}