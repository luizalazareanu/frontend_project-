var books=[
    {
        img: "./../images/book_covers/this_must_be_the_place.jpg",
        title:"This Must Be the Place",
        autor:"Maggie O'Farrell",
        price: "7.89",
    },
    {
        img: "./../images/book_covers/underground.jpg",
        title:"The Underground Railroad",
        autor:"Colson Whitehead",
        price: "9,98",
    },
];

// let requestURL = './../json/products.json';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function() {
//     const books = request.response;
//     createContentFromJson(books);
// };

// var books = require('./../json/products.json');
// var books = JSON.parse();

function createContentFromJson(){
    var output="<div class='item'>";
    for (var i in books) {
        output += "<img src=" + books[i].img + " " + "alt=cover" + "/>";
        output+="<img src=" + books[i].img + " " + "alt=cover" + "/>"+"<p>" + books[i].title + "</p> " + "<p>"+books[i].autor +"</p>" +"<p>"+ books[i].price +"</p>";
    }

    output+="</div>";
    document.getElementById("showTable").innerHTML=output;
}

// $.getJSON('./../json/products.json', function(products) {
//     var output="<div>";
//     for (var i in books) {
//         output += "<img src=" + books[i].img + "/>";
//         output+="<p>" + books[i].title + "</p> " + "<p>"+books[i].autor +"</p>" +"<p>"+ books[i].price +"</p>";
//     }
//
//     output+="</div>";
//     document.getElementById("showTable").innerHTML=output;
// });