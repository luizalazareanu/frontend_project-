//show hide paragraph
function showhide() {
    var div = document.getElementById("new-paragraph");
    div.classList.toggle('hidden-paragraph');
}
//fly to cart functionality on click
document.getElementById('add-to-cart').addEventListener("click", function (e) {
    e.preventDefault;
    // -> removing the class
    document.getElementById('add-to-cart').classList.remove("animate-add-to-cart");
    // -> triggering reflow
    void document.getElementById('add-to-cart').offsetWidth;
    // ->re-adding the class
    document.getElementById('add-to-cart').classList.add("animate-add-to-cart");
}, false);
// add to wishlist functionality on click
document.getElementById('add-to-wishlist').addEventListener("click", function (e) {
    e.preventDefault;
    // -> removing the class
    document.getElementById('add-to-wishlist').classList.remove("animate-add-to-wishlist");
    // -> triggering reflow
    void document.getElementById('add-to-wishlist').offsetWidth;
    // ->re-adding the class
    document.getElementById('add-to-wishlist').classList.add("animate-add-to-wishlist");
}, false);