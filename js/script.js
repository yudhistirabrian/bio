$('#lightbox').hide();

function copy(copyId) {
   var $inp = $('<input>');
   $('body').append($inp);
   $inp.val($('' + copyId).text()).select();
   document.execCommand('copy');
   $inp.remove();
   $('#alert').fadeIn(200, function () {
      $('#alert').fadeOut(4000);
   });
}

$(document).ready(function () {
   $('#copy-btn').click(function () {
      copy('#copied-text');
   });

   $('#img-profile').click(function () {
      $('#lightbox').fadeIn(200);
   });

   $('#img-lightbox').click(function () {
      $('#lightbox').fadeOut(200);
   });

   $('#lightbox').click(function () {
      $('#lightbox').fadeOut(200);
   });
});
