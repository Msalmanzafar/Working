

// main page loading
var myVar;

$(window).on("load",function(){
    $("#loader").hide("slow");
    $("#myDiv").css("display","block");
});

// function myFunction() {
//     myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//     document.getElementById("loader").style.display = "none";
//     document.getElementById("myDiv").style.display = "block";
// }
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
