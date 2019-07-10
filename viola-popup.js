
var link = document.querySelector(".social-button");
var popup = document.querySelector(".page-main__form");
var close = popup.querySelector(".form-close");


link.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("form-show");
});

close.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.remove("form-show");
});
