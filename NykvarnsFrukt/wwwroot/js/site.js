//Expand and collapse nav
function expandCollapseNav() {
    var x = document.getElementById("nav-dropdown");
    if (x.classList.contains("nav-grow")) {

        $("ul.nav-dropdown").removeClass("nav-grow");
        $("ul.nav-dropdown").addClass("nav-collapse");
    }
    else {
        $("ul.nav-dropdown").removeClass("nav-collapse");
        $("ul.nav-dropdown").addClass("nav-grow");
    }
}

function expandProductNav() {
    var x = document.getElementById("arrow-icon");
    var elements = document.getElementsByClassName("product-link");
    if (x.classList.contains("arrow-right")) {

        $("li.product-link").removeClass("under-nav-collapse");
        $("h4#arrow-icon").removeClass("arrow-right");
        $("li.product-link").addClass("under-nav-grow");
        $("h4#arrow-icon").addClass("arrow-down");
    }
    else {
        $("li.product-link").removeClass("under-nav-grow");
        $("h4#arrow-icon").removeClass("arrow-down");
        $("li.product-link").addClass("under-nav-collapse");
        $("h4#arrow-icon").addClass("arrow-right");
    }
}

//close nav on click outside
$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $("ul.nav-dropdown").hasClass("nav-grow");
        if (_opened === true && !clickover.hasClass("nav-grow") && !clickover.hasClass("toggle")) {
            $("input.input-toggler").click();
        }
    });
});

//Show active page in nav
var loc = window.location.pathname;
var pageName = loc.replace("/", "");
$("ul.nav-dropdown > li").removeClass("active");
var activePageNav = document.getElementById(pageName);
$(activePageNav).addClass("active");
if (pageName == "") {
    var activePageNav = document.getElementById("Index");
    $(activePageNav).addClass("active");
}

//Open mail client
var mailBtn = document.getElementById("mail-btn")
if (mailBtn != null) {
    mailBtn.onclick = function () {
        location.href = "mailto:gustavfalk@live.se";
    };
}

//Open mail client for order
var mailBtnOrder = document.getElementById("mail-btn-order")
if (mailBtnOrder != null) {
    mailBtnOrder.onclick = function () {
        location.href = "mailto:gustavfalk@live.se";
    };
}

//Open phone
var phoneBtn = document.getElementById("phone-btn")
if (phoneBtn != null) {
    phoneBtn.onclick = function () {
        location.href = "tel:046105545684";
    };
}

//Open map application/webpage
var storeIcon = document.getElementById("store-icon");
if (storeIcon != null) {
    storeIcon.onclick = function () {
        window.open("http://maps.apple.com/?q=S%C3%B6dert%C3%A4ljev%C3%A4gen+20,+155+32+Nykvarn", "_blank");
    };
}

//Open facebook
var facebook = document.getElementById("facebook");
if (facebook != null) {
    facebook.onclick = function () {
        window.open("https://www.facebook.com/nykvarnsfrukt", "_blank");
    };
}

