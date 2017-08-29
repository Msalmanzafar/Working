

// main page loading
var myVar;

$(window).on("load", function () {
    $("#loader").hide("slow");
    $("#myDiv").css("display", "block");
});
$(document).on('click', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});

// $(document).ready(function(){
//     // Activate carousel
//     $("#myCarousel").carousel();
// });

//--------------------------------------------------------------------------------------//

// main page top button 

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// ---------------------------------------------------------------------------------------------
