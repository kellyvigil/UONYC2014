var tag = "UONYC2013";
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


   $('#myAffix').affix({
    offset: {
      top: 10
    , bottom: function () {
        return (this.bottom = $('.bs-footer').outerHeight(true))
      }
    }
  })