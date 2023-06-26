// Parancsok betöltése a JSON fájlból
fetch('commands.json')
    .then(response => response.json())
    .then(commands => {
        // Parancsok feldolgozása
        function processCommand() {
            var userInput = document.getElementById('userInput').value;
            var output = document.getElementById('output');
            output.innerHTML = '';

            // Parancs keresése és végrehajtása
            var command = commands.find(cmd => cmd.keyword === userInput.toLowerCase());
            if (command) {
                output.innerHTML = command.response;
            } else {
                output.innerHTML = 'Sajnálom, nem értem a mondanivalóját. Tudok valamilyen más kérdésben segíteni?';
            }
        }

        // Enter lenyomásakor is legyen működő gomb
        var inputField = document.getElementById('userInput');
        inputField.addEventListener('keyup', function(event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                document.getElementById('input').querySelector('button').click();
            }
        });

        // Külső függvény hozzáférése
        window.processCommand = processCommand;
    });
