
$(document).ready(function() {

var tag = "UONYC2014";
var url = "https://api.instagram.com/v1/tags/"+tag+"/media/recent?client_id=bd5b06bec64b41f9a9d75aba40c05962&callback=?"

$.getJSON(url).success(function(response) {
    var photos = response.data;
    $.each(photos, function(index, photo) {
        var photo_el = "<li class='ig'><a href='" + photo.link + "'><img src='" + photo.images.standard_resolution.url + "' /><p>" + photo.caption.text + "</p></a></div>";
        $('.main').append(photo_el);
        console.log(photo);
  });
}).error(function(error) {
    alert(error);
});

function sayHello(){
  var userName = document.getElementById('monday').innerHTML = '<img class="agency" src="">';
}





!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

/*
   $('#myAffix').affix({
    offset: {
      top: 10
    , bottom: function () {
        return (this.bottom = $('.bs-footer').outerHeight(true))
      }
    }
  })//*/

  $(".agencies-monday").css("display","none")
  $(".agencies-tuesday").css("display","none")
  $(".agencies-wednesday").css("display","none")
  $(".agencies-thursday").css("display","none")
  $(".agencies-friday").css("display","none")

  $(".days button").click(function() {    
      console.log(this, $(this));
      var id = $(this).attr("id");
      console.log($(this).attr('data-show-day'))
      

      $('#agencies-list').children().hide()
      $($(this).attr('data-show-day')).show();

      //$("#agencies-list div").css("display", "none");
      //$("#agencies-list div#" + id + "").css("display", "");
  });

  



  $('#agencies-list button').click(function() {
    var details_html = $(this).parent().find('.details').html();
    $('#map-info').html( details_html );
  }); 
  
  $('.button-home').click(function() {
    var details_html = $(this).parent().find('.agencies-home').html();
    $('#map-info').html( agencies-home_html );
  }); 

  /*$(".agency-info").css("display","none")
  $(".agency-info2").css("display","none")
  $(".button-z").click(function() {
      var id = $(this).attr("id");
      $("#map-info div").css("display", "none");
      $("#map-info div#" + id + "").css("display", "");
  });*/




  $(window).scroll(function() {
    if ($(window).scrollTop() >= $('.cover-image').height()) {
      $('.afix-top').addClass('fix-to-top');
      $("#agencies").css('margin-top', '50px');
    } else {
      $('.afix-top').removeClass('fix-to-top');
      $("#agencies").css('margin-top', '0px');
    }
  });

  /*$(window).scroll(function() {
    if ($(window).scrollTop() >= $('#agencies').height()) {
      $("#nav-agencies a").css('color', 'red');
    
    }
    } else {
      $("nav-agencies a").css('color', 'black');
      $("nav-feed a").css('color', 'black');
      $("nav-bios a").css('color', 'black');
    }
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() >= $('#nav-feed').height()) {
      
      $("nav-feed a").css('color', 'red');
      

    } else {
      $("nav-agencies a").css('color', 'black');
      $("nav-feed a").css('color', 'black');
      $("nav-bios a").css('color', 'black');
    }
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() >= $('#nav-bios').height()) {
      
      $("nav-bios a").css('color', 'red');

    } else {
      $("nav-agencies a").css('color', 'black');
      $("nav-feed a").css('color', 'black');
      $("nav-bios a").css('color', 'black');
    }
  });*/

  

var target = $('.title');
var targetHeight = target.outerHeight();

$(document).scroll(function(e){
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    if(scrollPercent >= 0){
        target.css('opacity', scrollPercent);
      }
    if(scrollPercent <=.1){
      target.css('display' , 'none')
    } else{target.css('display' , '')
     }
    
});






//bio lightboxes 

  var show_lightbox = function(contents) {
    //console.log('show_lightbox');
    window.light_box_active = true;
    $('.lightbox-wrapper').css('display', 'block');
    $('.lightbox').html(contents).css('display', 'block');    
  }
  var hide_lightbox = function() {
    //console.log('hide_lightbox');
    $('.lightbox-wrapper').css('display', 'none');
    $('.lightbox').html('');  
    window.light_box_active = false;
  }

  $('.bio-box').on('click', function(el) {      
      var $inner = $(this).find('.inner');
      //var $inner_img = $inner.find('img');
      //console.log($inner_img);
      //var $inner_img.attr('src', '');
      var html = $inner.html();
      //console.log(html);      
      show_lightbox(html);
      //var name = $inner.find('h2').text();
      //console.log('name', name);
      
    });
    $('.lightbox').on('click', function(e) {
      e.stopPropagation();
    })
    $('.lightbox-wrapper').on('click', function(el) {
      if (window.light_box_active === true) {
        hide_lightbox();
      }
    });

//agency lightboxes

var show_lightbox = function(contents) {
    //console.log('show_lightbox');
    window.light_box_active = true;
    $('.lightbox-wrapper').css('display', 'block');
    $('.lightbox').html(contents).css('display', 'block');    
  }
  var hide_lightbox = function() {
    //console.log('hide_lightbox');
    $('.lightbox-wrapper').css('display', 'none');
    $('.lightbox').html('');  
    window.light_box_active = false;
  }

  $('.mobile-agency').on('click', function(el) {      
      var $inner = $(this).find('.agency-inner');
      //var $inner_img = $inner.find('img');
      //console.log($inner_img);
      //var $inner_img.attr('src', '');
      var html = $inner.html();
      //console.log(html);      
      show_lightbox(html);
      //var name = $inner.find('h2').text();
      //console.log('name', name);
      
    });
    $('.lightbox').on('click', function(e) {
      e.stopPropagation();
    })
    $('.lightbox-wrapper').on('click', function(el) {
      if (window.light_box_active === true) {
        hide_lightbox();
      }
    });


});   