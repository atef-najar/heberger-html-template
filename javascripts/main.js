// Slider
$(document).ready(function() {
    var slider = $('.slider-content');
    slider.owlCarousel({
        items: 1,
        mouseDrag: false,
        touchDrag: false,
        lazyLoad: true,
        slideSpeed: 500,
        autoPlay: true,
        stopOnHover: true,
        loop: true
    });
    $('.slider-controls .next').click(function() {
        slider.trigger('next.owl.carousel');
    });
    $('.slider-controls .prev').click(function() {
        slider.trigger('prev.owl.carousel');
    });
    $('.slider-controls-mobile .next').click(function() {
        slider.trigger('next.owl.carousel');
    });
    $('.slider-controls-mobile .prev').click(function() {
        slider.trigger('prev.owl.carousel');
    });
});


// Get The current viewport
function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

// Main navbar click event
function clickEvent() {
    if(viewport().width <= 991) {
        $('.main-navbar-item a.dropdown-toggle').attr('data-toggle','dropdown');
    } else {
        $('.main-navbar-item a.dropdown-toggle').attr('data-toggle','hover');
    }
}
$(document).ready(clickEvent);
$(window).resize(clickEvent);

// Main navbar dropdown animation
function mainNavbar () {
    if (($('.main-navbar-item a.dropdown-toggle').attr('data-toggle'))=='hover') {
        $('.main-navbar .dropdown').hover(function() {
            $('ul.dropdown-menu', this).stop(true, true).slideDown(100);
            $(this).addClass('open');
          }, function() {
            $('ul.dropdown-menu', this).stop(true, true).slideUp(100);
            $(this).removeClass('open');
          });
  } else {
    $('.main-navbar .dropdown').unbind('mouseenter mouseleave')
  }
}
$(document).ready(mainNavbar);
$(window).resize(mainNavbar);


// Remove cols styling when on mobile
function removeFromMainNavbar() {
    if(viewport().width <= 991) {
        $('.main-navbar .dropdown-menu.style-one li').removeClass('col-lg-6 col-md-6 col-sm-12 col-xs-12');
        $('.main-navbar .dropdown-menu.style-three li.left').removeClass('col-lg-7 col-md-7 col-sm-12 col-xs-12');
        $('.main-navbar .dropdown-menu.style-three li.right').removeClass('col-lg-5 col-md-5 col-sm-12 col-xs-12');
    }
    else { 
        if (!($('.main-navbar .dropdown-menu.style-one li').hasClass('col-lg-6'))) {
            $('.main-navbar .dropdown-menu.style-one li').addClass('col-lg-6 col-md-6 col-sm-12 col-xs-12');
        }
        if (!($('.main-navbar .dropdown-menu.style-three li').hasClass('col-lg-7'))) {
            $('.main-navbar .dropdown-menu.style-three li.left').addClass('col-lg-7 col-md-7 col-sm-12 col-xs-12');
            $('.main-navbar .dropdown-menu.style-three li.right').addClass('col-lg-5 col-md-5 col-sm-12 col-xs-12');
        }
    }
}
$(document).ready(removeFromMainNavbar);
$(window).resize(removeFromMainNavbar);

// Tabs Work
var btn = $('.tab-links li a');
btn.click(function() {
    $(btn.attr('href')).tab('show');
});

var btn2 = $('.responsive-tab-links ul li a');
btn2.click(function() {
    $('.responsive-tab-links ul li').removeClass('active');
    var s = $(this).html()+" <i class='fa fa-chevron-down'>";
    $('.responsive-tab-links .tabs-toggle').html(s);
});

// Domain Search
$('.domain-search .dropdown-menu li button').click(function() {
    $('.dropdown a.btn').text($(this).attr('data-value'));
});

// Feedback Section
var feedback = $('.feedback-slider');
feedback.owlCarousel({
    items: 3,
    margin: 20,
    mouseDrag: false,
    touchDrag: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        768: {
           items: 2 
        },
        992: {
            items: 3
        }
    }
});
$('.feedback-quote p').each(function(index, element) {
    $clamp(element, {clamp: 6});
});

// Companies Section
function setLast() {
    var n = $('.table-styling .post').length;
    var s = viewport().width;
    $('.first-row').removeClass('first-row');
    $('.last-col').removeClass('last-col');
    if (s >= 992) {
        $('.post:eq('+0+')').addClass('first-row');
        $('.post:eq('+1+')').addClass('first-row');
        $('.post:eq('+2+')').addClass('first-row');
        for (var i=2;i<=n;i+=3) {
            $('.post:eq('+(i)+')').addClass('last-col');
        }
    } else {
        for (var i=0;i<=n;i++) {
            if (i % 2 !=0) {
                $('.post:eq('+(i)+')').addClass('last-col');
            }
        }
        $('.post:eq('+0+')').addClass('first-row');
        $('.post:eq('+1+')').addClass('first-row');
    }
}
$(document).ready(setLast);
$(window).resize(setLast);

// Twitter Feed
$(document).ready(function() {
    $('.twitter-feed').tweecool({
        username: 'envato',
        limit: 2
    });
});

// Back to top
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});

// Pricing table
$(document).ready(function() {
    $('.pricing-table-big .presentation ul li.head').css('height',$('.pricing-table-big .plan ul li.head').outerHeight());
$('.pricing-table-big .presentation ul li.table-footer').css('height',$('.pricing-table-big .plan ul li.table-footer').outerHeight());
});