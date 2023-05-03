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

//set active menu option
$(document).ready(function () {
    $("ul.nav-dropdown> li").click(function (e) {
        $("ul.nav-dropdown > li").removeClass("active");
        $(this).addClass("active");
    });
});


