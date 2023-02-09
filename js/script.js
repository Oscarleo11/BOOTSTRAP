$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function () {
    $("#mycarousel").carousel({ interval: 2000 });

    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });

    // $("#loginModalToggle").click(function() {
    //     $("#loginModal").modal('toggle');
    // });

    // $("#reserveModal").click(function() {
    //     $("#loginModal").modal('toggle');
    // });

    // Pour la modal
    // Get references to the modal, the button, and the close button
    var modal = document.getElementById("loginModal");         
    var showModalBtn = document.getElementById("showModalBtn");     
    var closeBtn = document.getElementsByClassName("close")[0];

    // Add an event listener to the button to show the modal
    showModalBtn.addEventListener("click", function () {
        modal.style.display = "block";
        // modal2.style.display = "block";
    });

    // Add an event listener to the close button to hide the modal
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
        // modal2.style.display = "none";
    });
    // Add an event listener to the window to hide the modal when clicked outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            // modal2.style.display = "none";
        }
    });

   
});

