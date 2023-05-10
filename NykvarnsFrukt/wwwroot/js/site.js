// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


//Expand and collapse nav
function expandCollapseNav() {
    var x = document.getElementById("nav-dropdown");
    if (x.classList.contains("nav-grow")) {

        $("ul.nav-dropdown").removeClass("nav-grow");
        $("ul.nav-dropdown").addClass("nav-collapse");
       
    } else {
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

//set active menu option
//$(document).ready(function () {
//    $("ul.nav-dropdown> li").click(function (e) {
//        $("ul.nav-dropdown > li").removeClass("active");
//        $(this).addClass("active");
//        if ((this).classList.contains("product-link")) {
//            $("li.product-nav").addClass("active");
//        }
//    });
//});
var loc = window.location.pathname;
var pageName = loc.replace("/", "");
$("ul.nav-dropdown > li").removeClass("active");
var activePageNav = document.getElementById(pageName);
$(activePageNav).addClass("active");


//Open mail client
document.getElementById("mail-btn").onclick = function () {
    location.href = "mailto:gustavfalk@live.se";
};

//Open map application/webpage
document.getElementById("store-icon").onclick = function () {
    window.open("http://maps.apple.com/?q=S%C3%B6dert%C3%A4ljev%C3%A4gen+20,+155+32+Nykvarn","_blank");
};

