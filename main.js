//Ubacivanje fajlova za zvuk u projekat.
let pas = new Audio('sounds/dog.mp3');
let patka = new Audio('sounds/duck.mp3');
let macka = new Audio('sounds/cat.mp3');
let pile = new Audio('sounds/chicken.mp3');
let krava = new Audio('sounds/cow.mp3');

//Funkcija za pustanje zvuka.
function zvukPsa() {
    pas.play();
}

function zvukPatke() {
    patka.play();
}

function zvukMacke() {
    macka.play();
}

function zvukPilica() {
    pile.play();
}

function zvukKrave() {
    krava.play();
}

//Otvaranje stranica o domacim zivotinjama kada korisnik klikne na njih.
function StranicaOPsu() {
    window.open('pas.html','');
}

function StranicaOPatki() {
    window.open('patka.html','');
}

function StranicaOMacki() {
    window.open('macka.html','');
}

function StranicaOPilicima() {
    window.open('pile.html','');
}

function StranicaOKravi() {
    window.open('krava.html','');
}

//otvaranje stranica za pocetnu stranu, o autoru i uputstvo.
function OtvoriPocetnuStranu() {
    window.open('index.html','_self');
}

function OtvoriOAutoru() {
    window.open('Oautoru.html','_self');
}

function OtvoriUputstvo() {
    window.open('UPUTSTVO.html','_self');
}
