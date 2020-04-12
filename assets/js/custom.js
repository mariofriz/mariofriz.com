$.fn.visible = function(partial) {
  
    var $t            = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top,
        _bottom       = _top + $t.height(),
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;
  
  return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

};

var win = $(window);
var allMods = $(".section");
var counter = 0;
var interval;

$(document).ready(function() {
  // Reveal already visible elements
  interval = setInterval(revealElement,500);
  $('#top').click(function(e) {
    e.preventDefault();
    Foundation.lib_methods.scrollTo($(window), ($('#logo').offset()).top - 50, 500);
  });

  $('.error').hide();

  win.scroll(function(event) {
    if (($('#logo').visible(true)) == false) {
      $('#top').addClass("appear");
    }
    else {
      $('#top').removeClass("appear");
    }
    
    allMods.each(function(i, el) {
      var el = $(el);
      if (el.visible(true)) {
        el.addClass("appear");
      } 
    });    
  });

  $('#contact-send').click(function() {
    $('.error').hide();
    var valid = true;
    var message = $("#contact-message");
    var name = $("#contact-name");
    var email = $("#contact-email");
    var token = $('input[name=_token]');

    // Check fields
    if (message.val() == '') {
      $("#contact-message-error").show();
      valid = false;
    }
    if (name.val() == '') {
      $("#contact-name-error").show();
      valid = false;
    }
    if (email.val() == '' || !email.val().match("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
      $("#contact-email-error").show();
      valid = false;
    }

    if (valid) {
      $('#contact-send').addClass('sent')
        .text('Sending...')        
        .off('click');

      // Send form
      $.post('/message', 
        { 
          message: message.val(),
          name: name.val(),
          email: email.val(),
          token: token.val()
        },
        function(response){
          $('#contact-send').text("Thanks, I'll be in touch.");        
          message.val('');
          name.val('');
          email.val('');
        }
      );
    }
    return false;
  });
});

function revealElement() {
  var el = $(allMods.get(counter));
  if (el.visible(true)) {
    el.addClass("appear");
    counter++;
  }
  else {
    clearInterval(interval);
  }
}