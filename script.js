'use strict';

$(function(){

   $('a').on('click', function(e){
       e.preventDefault();
       if ($("#pass").attr('type') == 'password'){
           $('a').html('Ukryj znaki');
           $('#pass').attr('type', 'text');
       } else {
           $('a').html('Pokaż znaki');
           $('#pass').attr('type', 'password');
       }
   });
   $("#pass").keyup(function count(){
        const liczba = $(this).val().length;
        $("span").html(+liczba)
   });
});

