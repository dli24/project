// ==================================MAP=========================================
var coordinate = {lat: 37.5934, lng: -122.0438 };
var map = new google.maps.Map(document.querySelector('.location'), {
    zoom: 10,
  center: coordinate,
});
var marker = new google.maps.Marker({ 
    position: coordinate,
    map: map,
  })

//   ========================NAVIGATION BAR================================================
const $home = $('.home')
const $topUl = $('.top-ul')
const $navHome = $('.navigation .home, .top-ul li a')

$('#hamburger').on('click', function(){
    $home.addClass('home1');
    $home.toggle();
    $topUl.addClass('top-ul1');
    $topUl.toggle();
    $navHome.css('visibility','visible')
    $navHome.toggle();
})

// ===============================CONTACT======================================================

$('.submit').on('click', function(event){
    event.preventDefault();

$('form').html("<p>THANK FOR THE SUBMIT!!!</p>")
    


$('.name, input[name="email"]').each(function(){
    if($(this).val() === ""){
        let $theField = $(this)
        $theField.addClass('error').fadeIn();
    } else {
        let $theField = $(this)
        $theField.removeClass('error');

    }

})
})