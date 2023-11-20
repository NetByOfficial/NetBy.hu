$(document).ready(function(){

    $.getJSON("verzio.json", function(data){
        console.log(data)

        $('.v').html(data.v);

    }).fail(function(){
        console.error("Hiba a Kódban!")
    })
})