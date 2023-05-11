$(document).ready(function(){

    $.getJSON("JSON/fejlesztők.json", function(data){
        console.log(data)

        $('.Név').html(data.Név);
        $('.Hozzáférés').html(data.Hozzáférés);
        $('.Verzió').html(data.weboldal_verzio);


    }).fail(function(){
        console.error("Hiba a Kódban!")
    })
})