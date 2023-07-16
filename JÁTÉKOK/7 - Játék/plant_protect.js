// A Növényvédelem gombra kattintva megjelennek a növényvédelmi opciók
let novedelemBtn = document.getElementById("novedelemBtn");
novedelemBtn.addEventListener("click", showNovedelemMenu);



function showNovedelemMenu() {
  let novedelemMenu = document.getElementById("novedelemMenu");
  novedelemMenu.style.display = "block";
}

// Véletlenszerűen generált betegségek és kártevők a növények számára
let betegsegek = ["penészesedés", "lisztharmat", "rothadás"];
let kartevek = ["csigák", "atka", "lepkekártevő"];

// Növényvédelmi termékek különböző árakon
let termek = [
  {
    nev: "Permetezőszer",
    ar: 50,
    hatas: "Betegségek ellen hatékony",
  },
  {
    nev: "Műtrágya",
    ar: 30,
    hatas: "Növények táplálására szolgál",
  },
  {
    nev: "Kártevőirtó",
    ar: 100,
    hatas: "Kártevők ellen hatékony",
  },
];

// Játékos pénzösszege
let penz = 100;

// Növények objektumok tömbje
let novenyek = [
  {
    nev: "Paradicsom",
    ar: 10,
    elo: true,
    betegseg: "",
    kartevo: "",
  },
  {
    nev: "Uborka",
    ar: 20,
    elo: true,
    betegseg: "",
    kartevo: "",
  },
  {
    nev: "Paprika",
    ar: 15,
    elo: true,
    betegseg: "",
    kartevo: "",
  },
];

// Növények betegségeinek és kártevőinek véletlenszerű generálása
function generateNovenyProblems() {
  novenyek.forEach(function (noveny) {
    let betegsegIndex = Math.floor(Math.random() * betegsegek.length);
    let kartevoIndex = Math.floor(Math.random() * kartevek.length);
    noveny.betegseg = betegsegek[betegsegIndex];
    noveny.kartevo = kartevek[kartevoIndex];
  });
}

// Növényvédelmi termékek vásárlása
function buyNovenyvedelmiTermekek(termekIndex) {
  let termekAr = termek[termekIndex].ar;
  if (penz >= termekAr) {
    penz -= termekAr;
    let hatas = termek[termekIndex].hatas;
    let novedelemMenu = document.getElementById("novedelemMenu");
    novedelemMenu.style.display= "none";
    let message = "Sikeres vásárlás! " + hatas;
    alert(message);
    } else {
    alert("Nincs elegendő pénz!");
    }
    }
    
    // Növényvédelmi termékek használata
    function useNovenyvedelmiTermek(novenyIndex, termekIndex) {
    let hatas = termek[termekIndex].hatas;
    let message = "";
    if (hatas.includes("Betegségek")) {
    novenyek[novenyIndex].betegseg = "";
    message = "A " + novenyek[novenyIndex].nev + " növényeknek nincs többé betegsége.";
    } else if (hatas.includes("Kártevők")) {
    novenyek[novenyIndex].kartevo = "";
    message = "A " + novenyek[novenyIndex].nev + " növényeknek nincs többé kártevője.";
    } else {
    message = "Nem történt változás a " + novenyek[novenyIndex].nev + " növényekkel.";
    }
    alert(message);
    }
    
    // Betegségek és kártevők ellenőrzése és kezelése
    function checkNovenyProblems() {
    novenyek.forEach(function (noveny) {
    if (noveny.betegseg !== "") {
    let message = "A " + noveny.nev + " növények betegsége: " + noveny.betegseg + ".";
    alert(message);
    }
    if (noveny.kartevo !== "") {
    let message = "A " + noveny.nev + " növények kártevője: " + noveny.kartevo + ".";
    alert(message);
    }
    });
    }
    
    // Teszt adatok inicializálása
    generateNovenyProblems();
    
    // Növényvédelmi termékek megjelenítése a HTML-ben
    let termekContainer = document.getElementById("termekContainer");
    termek.forEach(function (termek, index) {
    let termekElem = document.createElement("div");
    termekElem.innerHTML =
    "<span>" + termek.nev + "</span>" + "<span>" + termek.ar + " pénz</span>";
    let vasarlasBtn = document.createElement("button");
    vasarlasBtn.innerHTML = "Vásárlás";
    vasarlasBtn.addEventListener("click", function () {
    buyNovenyvedelmiTermekek(index);
    });
    termekElem.appendChild(vasarlasBtn);
    termekContainer.appendChild(termekElem);
    });
    
    // Növények megjelenítése a HTML-ben
    let novenyContainer = document.getElementById("novenyContainer");
    novenyek.forEach(function (noveny, index) {
    let novenyElem = document.createElement("div");
    novenyElem.innerHTML = "<span>" + noveny.nev + "</span>" + "<span>" + noveny.ar + " pénz</span>";
    let oltasBtn = document.createElement("button");
    oltasBtn.innerHTML = "Növényvédelem";
    oltasBtn.addEventListener("click", function () {
    showNovedelemMenu();
    });
    let betegsegElem = document.createElement("div");
    betegsegElem.innerHTML = "<span>Betegség: " + noveny.betegseg + "</span>";
let kartevoElem = document.createElement("div");
kartevoElem.innerHTML = "<span>Kártevő: " + noveny.kartevo + "</span>";
novenyElem.appendChild(oltasBtn);
novenyElem.appendChild(betegsegElem);
novenyElem.appendChild(kartevoElem);
novenyContainer.appendChild(novenyElem);
});

// Növényvédelmi termékek kiválasztása
let novedelemSelect = document.getElementById("novedelemSelect");
termek.forEach(function (termek, index) {
let option = document.createElement("option");
option.text = termek.nev;
novedelemSelect.add(option);
});

// Növényvédelmi termék használata
let novedelemUseBtn = document.getElementById("novedelemUseBtn");
novedelemUseBtn.addEventListener("click", function () {
let novenyIndex = document.getElementById("novenyIndexInput").value;
let termekIndex = novedelemSelect.selectedIndex;
useNovenyvedelmiTermek(novenyIndex, termekIndex);
hideNovedelemMenu();
});

// Növényvédelem menü megjelenítése
function showNovedelemMenu() {
document.getElementById("novedelemMenu").style.display = "block";
}

// Növényvédelem menü elrejtése
function hideNovedelemMenu() {
document.getElementById("novedelemMenu").style.display = "none";
}

// Betegségek és kártevők teszt adatok inicializálása
function generateNovenyProblems() {
let betegsegek = ["Rozsdásodás", "Penészesedés", "Levelelváltozás"];
let kartevek = ["Levéltetű", "Pajzstetű", "Levélmoly"];
novenyek.forEach(function (noveny) {
if (Math.random() < 0.5) {
noveny.betegseg = betegsegek[Math.floor(Math.random() * betegsegek.length)];
}
if (Math.random() < 0.5) {
noveny.kartevo = kartevek[Math.floor(Math.random() * kartevek.length)];
}
});
}

// Betegségek és kártevők ellenőrzése és kezelése
checkNovenyProblems();

// Növényvédelmi termék használata
function useNovenyvedelmiTermek(novenyIndex, termekIndex) {
    let noveny = novenyek[novenyIndex];
    let termek = termek[termekIndex];
    
    // Ellenőrzés, hogy van-e kiválasztott növény
    if (!noveny) {
    alert("Kérlek válassz ki egy növényt!");
    return;
    }
    
    // Ellenőrzés, hogy van-e kiválasztott termék
    if (!termek) {
    alert("Kérlek válassz ki egy növényvédelmi terméket!");
    return;
    }
    
    // Ellenőrzés, hogy van-e szüksége a növényvédelmi termékre
    if (!noveny.betegseg && !noveny.kartevo) {
    alert("Nincs szüksége növényvédelmi termékre a növénynek!");
    return;
    }
    
    // Ellenőrzés, hogy a kiválasztott termék hatásos-e a növény számára
    if (!termek.hatasos.indexOf(noveny.betegseg) && !termek.hatasos.indexOf(noveny.kartevo)) {
    alert("A kiválasztott termék nem hatásos a növény számára!");
    return;
    }
    
    // Termék használata a növényen
    if (noveny.betegseg) {
    noveny.betegseg = null;
    }
    if (noveny.kartevo) {
    noveny.kartevo = null;
    }
    alert("Sikeresen alkalmaztad a növényvédelmi terméket!");
    updateNovenyek();
    }
    
    // Betegségek és kártevők ellenőrzése és kezelése
    function checkNovenyProblems() {
    let betegsegCounter = 0;
    let kartevoCounter = 0;
    
    novenyek.forEach(function (noveny) {
    if (noveny.betegseg) {
    betegsegCounter++;
    }
    if (noveny.kartevo) {
    kartevoCounter++;
    }
    });
    
    if (betegsegCounter > 0) {
    alert("Figyelem! " + betegsegCounter + " növényed betegségben van!");
    }
    
    if (kartevoCounter > 0) {
    alert("Figyelem! " + kartevoCounter + " növényed kártevőtől szenved!");
    }
    }
    
    // Növények betakarítása
    function collectNoveny(novenyIndex) {
    let noveny = novenyek[novenyIndex];
    if (noveny.allapot === "betakaritott") {
    alert("Ezt a növényt már betakarítottad!");
    return;
    }
    noveny.allapot = "betakaritott";
    let novenyElem = document.getElementById("noveny_" + novenyIndex);
    novenyElem.style.backgroundImage = "url('img/betakaritott.png')";
    alert("Sikeresen betakarítottad a növényt!");
    updateNovenyek();
    }
    
    // Növények frissítése
    function updateNovenyek() {
    let novenyekElem = document.getElementById("novenyek");
    novenyekElem.innerHTML = "";
    novenyek.forEach(function (noveny, index) {
    let novenyElem = document.createElement("div");
    novenyElem.id = "noveny_" + index;
    novenyElem.classList.add("noveny");
    if (noveny.allapot === "novekszik") {
    novenyElem.style.backgroundImage = "url('img/" + noveny.kep + ".png')";
    } else {
    novenyElem.style.backgroundImage = "url('img/betakaritott.png')";
    }
    novenyekElem.appendChild(novenyElem);
    });
    }
    
    // Játék inicializálása
    function init() {
    // Növények inicializálása
    for (let i = 0; i < 5; i++) {
    let noveny = {
    allapot: "novekszik",
    kep: getRandomNovenyKep(),
    viz: 3,
    tapanyag: 3,
    betegseg: null,
    kartevo: null
    };
    novenyek.push(noveny);
    }
    
    // Növények megjelenítése
    updateNovenyek();
    
    // Növényvédelmi termékek inicializálása
    novenyvedelmiTermekek.push({
    nev: "Kukacosodás elleni permet",
    hatasos: ["kukacosodás"],
    ar: 100
    });
    novedvedelmiTermekek.push({
    nev: "Gombás megbetegedések elleni permet",
    hatasos: ["penesz", "rozsda", "fekete levél foltosság"],
    ar: 150
    });
    novedvedelmiTermekek.push({
    nev: "Levelek táplálása",
    hatasos: [],
    ar: 50,
    tapanyag: 2
    });
    novedvedelmiTermekek.push({
    nev: "Növények öntözése",
    hatasos: [],
    ar: 30,
    viz: 2
    });
    
    // Növényvédelmi termékek megjelenítése
    let novenyvedelmiTermekekElem = document.getElementById("novenyvedelmi-termekek");
    novedvedelmiTermekek.forEach(function (termek, index) {
    let termekElem = document.createElement("div");
    termekElem.classList.add("termek");
    termekElem.innerHTML = termek.nev + " - Ár: " + termek.ar + " Ft";
    termekElem.addEventListener("click", function () {
    useNovenyvedelmiTermek(index);
    });
    novenyvedelmiTermekekElem.appendChild(termekElem);
    });
    
    // Játék indítása
    setInterval(function () {
    novenyek.forEach(function (noveny) {
    noveny.viz--;
    noveny.tapanyag--;
    if (noveny.viz < 1) {
    noveny.betegseg = "szárazság";
    }
    if (noveny.tapanyag < 1) {
        noveny.betegseg = "éhezés";
}
if (noveny.betegseg === null && noveny.kartevo === null) {
if (noveny.allapot === "novekszik") {
let randomNum = Math.floor(Math.random() * 100);
if (randomNum < 10) {
noveny.betegseg = getRandomBetegseg();
} else if (randomNum < 20) {
noveny.kartevo = getRandomKartevo();
}
} else {
noveny.allapot = "novekszik";
noveny.kep = getRandomNovenyKep();
noveny.viz = 3;
noveny.tapanyag = 3;
noveny.betegseg = null;
noveny.kartevo = null;
}
} else if (noveny.betegseg !== null) {
novenyElem = document.getElementById("noveny_" + novenyek.indexOf(noveny));
novenyElem.classList.add("beteg");
}
});
updateNovenyek();
}, 3000);
}

// Játék inicializálása
init();



