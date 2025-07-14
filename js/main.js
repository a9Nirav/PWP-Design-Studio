(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 2000);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('nirav-background shadow');
            } else {
                $('.fixed-top').removeClass('nirav-background shadow');
            }
        } 
        else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('nirav-background shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('nirav-background shadow').css('top', 0);
            }
        }
    });



    document.addEventListener('scroll', function() {
        var logo = document.getElementById('logo');
        var logoText = document.getElementById("logo-text");
        if (window.scrollY > 50) {
            logo.src = 'img/pwp_logo8.png'; // New logo after scrolling down
            logo.style.height = '100px'; // Set height to 80px
            logo.style.width = '200px'; // Set width to 150px
            logoText.style.display = 'block'; // Show the text
         
        } else {
            logo.src = 'img/pwp_logo9.png'; // Original logo
            logo.style.height = '100px'; // Set height to 100px
            logo.style.width = '75px'; // Set width to 80px
            logoText.style.display = 'none'; // Hide the text
        }
    });
    
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);


// for phone view class name change

function switchClassBasedOnScreenSize() {
    var element = document.getElementById('myElement');
    if (window.innerWidth <= 600) {
        element.className = 'container';
        // element.className = 'background1';
    }
    else if (window.innerWidth <= 1400) {
        element.className = 'container-xll';
        // element.className = 'background1';
    }
     else {
        // element.className = 'container-fluid';
        // element.className = 'background1';
    }
}

// Call the function on page load and on window resize
window.addEventListener('load', switchClassBasedOnScreenSize);
window.addEventListener('resize', switchClassBasedOnScreenSize);



// html form 


const scriptURL = 'https://script.google.com/macros/s/AKfycbz-Y6zdY4-IITxMBAo1-oATsP-6W2nzzJd-R77U9TtAwmBXqYJKhEQgpN0J58MYSdq0/exec'
const form = document.forms['google-sheet']
      
form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
.catch(error => console.error('Error!', error.message))
 })
     