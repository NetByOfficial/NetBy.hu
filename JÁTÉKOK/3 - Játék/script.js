var done_Button = document.getElementById("done-btn");
var started = false;

function done_click() {

        if(started)
        {
            done();
        }
                
};
function done() {
    timer_over();
    clearInterval(timer)
};

function timer_over() {


	var timer = setInterval(function() {
		var elapsedTime = Date.now() - startTime;
		var remainingTime = 60000 - elapsedTime;
		if (remainingTime <= 0) {
            clearInterval(timer);

        }})
    var inputText = document.getElementById("input").value;
    var quoteText = document.getElementById("quote").innerHTML;
    var wordsTyped = inputText.split(" ").length;
    var quoteWords = quoteText.split(" ").length;
    var accuracy = calculateAccuracy(inputText, quoteText);
    var wpm = calculateWPM(wordsTyped, elapsedTime);
    document.getElementById("result").innerHTML = "Gyorsaságod: " + wpm + " szó/perc<br>Pontosságod: " + accuracy + "%";
    document.getElementById("input").disabled = true;

    
    
    
    function calculateAccuracy(inputText, quoteText) {
    // Eltávolítjuk az idézetből az összes HTML taget
    var quoteTextNoTags = quoteText.replace(/<[^>]*>/g, '');
    
    // Az idézet és az input szövegét kisbetűssé alakítjuk és eltávolítjuk a felesleges space karaktereket
    var quoteWords = quoteTextNoTags.toLowerCase().split(" ");
    var inputWords = inputText.toLowerCase().split(" ");

    // Összehasonlítjuk a két szöveget szószámonként és kiszámítjuk a pontosságot
    var numCorrect = 0;
    for (var i = 0; i < inputWords.length; i++) {
        if (inputWords[i] === quoteWords[i]) {
            numCorrect++;
        }
    }
    var accuracy = (numCorrect / inputWords.length) * 100;
    return accuracy.toFixed(2);

    }

    function calculateWPM(numWords, elapsedTime) {
    var minutes = elapsedTime / 60000;
    var wpm = numWords / minutes;
    return wpm.toFixed(0);
    }

    };

function start() {
    
    started = true;
	// Elrejtjük a Start gombot
	document.getElementById("start-btn").style.display = "none";


	
	// Engedélyezzük az input mezőt
	document.getElementById("input").disabled = false;
	
	// Elindítjuk az időzítőt
	var startTime = Date.now();
	
	// Várakozunk 60 másodpercig
	timer = setInterval(function() {
		elapsedTime = Date.now() - startTime;
		remainingTime = 10000 - elapsedTime;
		document.getElementById("result").innerHTML = "Még " + (remainingTime/1000).toFixed(1) + " másodperc van hátra...";
		if (remainingTime <= 0) {
            clearInterval(timer);
          timer_over();
        }});




    }

