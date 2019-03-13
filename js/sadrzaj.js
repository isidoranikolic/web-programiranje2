
function generisiMeniDesktop(menu) {
    var menuItems = ""
    for (var i = 0; i < menu.length; i++) {
        menuItems += '<li><a href=' + menu[i].link + '>' + menu[i].text + '</a></li>'
    }
    document.getElementById("menu").innerHTML += menuItems;
}


function generisiMeniMobilni(menu) {
    var menuItems = ""
    for (var i = 0; i < menu.length; i++) {
        menuItems += '<a href=' + menu[i].link + '>' + menu[i].text + '</a>'
    }
    document.getElementById("menu-mobile").innerHTML += menuItems;
}



function generisiSlider(slider) {
    var sliderItems = ""
    for (var i = 0; i < slider.length; i++) {
        sliderItems += '<li><img src="' + slider[i].img + '" alt="' + slider[i].alt + '" /></li>'
    }
    document.getElementById("slider-list").innerHTML += sliderItems;
}



function generisiParagraf(pocetnaTekst) {
    var paragraf = ""
    for (var i = 0; i < pocetnaTekst.length; i++) {
        paragraf += '<div class="' + pocetnaTekst[i].class + '" id="' + pocetnaTekst[i].id + '"><h5 class="col-md-12">' + pocetnaTekst[i].naslov + '</h5><p class="wow fadeInDown">' + pocetnaTekst[i].tekst + '</p></div>'
    }
    document.getElementById("paragraf-tekst").innerHTML += paragraf;
}

var uslugeItems=[
    {
        slikaPozadina: "img/u1.jpg",
        slikaPozadinaAlt: "Pozadina rezanje",
        slikaNaslov: "img/nazivu.png",
        slikaNaslovAlt: "REZANJE",
        tekst: "Kris-kom nudi širok spektar obrada rezanjem, pružamo usluge glodanja, struganja, bušenja i brušenja."
    },
    {
        slikaPozadina: "img/u3.jpg",
        slikaPozadinaAlt: "Pozadina erodiranje",
        slikaNaslov: "img/nazivu2.png",
        slikaNaslovAlt: "ERODIRANJE",
        tekst: "U oblasti obrade erodiranjem nudimo obradu erodiranjem sa punom elektrodom."
    },
    {
        slikaPozadina: "img/u2.jpg",
        slikaPozadinaAlt: "Pozadina injekciono presovanje",
        slikaNaslov: "img/nazivu3.png",
        slikaNaslovAlt: "INJEKCIONO PRESOVANJE",
        tekst: "Pored mašinskih obrada imamo i pogon za obradu polimera, sa nekoliko mašina za injekciono presovanje."
    }
]

function generisiUslugu(usluga) {
    var usluge = "";
    if (!usluga) {
        usluge = "";
        for (var i = 0; i < uslugeItems.length; i++) {
            usluge += '<div class="row"><div class="col-md-7 wow fadeInLeft"><div class="slika1"><img src="' + uslugeItems[i].slikaPozadina + '" alt="' + uslugeItems[i].slikaPozadinaAlt + '" /></div><div class="nazivu1"><img src="' + uslugeItems[i].slikaNaslov + '" alt="' + uslugeItems[i].slikaNaslovAlt + '" /></div></div><div class="col-md-5"><p class="opis wow fadeInRight">' + uslugeItems[i].tekst + '</p></div></div>'
        }
    } else {
        usluge = "";
        for (var i = 0; i < usluga.length; i++) {
            usluge += '<div class="row"><div class="col-md-7 wow fadeInLeft"><div class="slika1"><img src="' + usluga[i].slikaPozadina + '" alt="' + usluga[i].slikaPozadinaAlt + '" /></div><div class="nazivu1"><img src="' + usluga[i].slikaNaslov + '" alt="' + usluga[i].slikaNaslovAlt + '" /></div></div><div class="col-md-5"><p class="opis wow fadeInRight">' + usluga[i].tekst + '</p></div></div>'
        }
    }
    document.getElementById("usluge").innerHTML = usluge;
}


function generisiAbout(aboutItems) {
    var about = ' <div class="col-md-5 col-md-offset-1"><img  src="' + aboutItems.slika.src + '" alt="' + aboutItems.slika.alt + '" class="' + aboutItems.slika.klasa + '"></div><div class="col-md-4 col-md-offset-1 desno wow fadeInRight"><div class="row"><p>' + aboutItems.tekst + '</p></div></div>'
    document.getElementById("aboutid").innerHTML += about;
}



function generisiKontakt(kontaktItems) {
    var kontakt = ""
    for (var i = 0; i < kontaktItems.length; i++) {
        kontakt += '<div class="row"><img src="' + kontaktItems[i].img + '" alt="' + kontaktItems[i].alt + '" /><p>' + kontaktItems[i].naslov + '</p><p>' + kontaktItems[i].tekst + '</p></div>'
    }
    document.getElementById("kontakt").innerHTML += kontakt;
}


function generisiGaleriju(galleryItems) {
    var gallery = ""
    for (var i = 0; i < galleryItems.length; i++) {
        gallery += ' <div class="col-md-3"><div class="thumbnail"><a href="' + galleryItems[i].img + '" data-lightbox="roadtrip"><img src="' + galleryItems[i].img + '" alt="' + galleryItems[i].alt + '" style="width:100%"></a></div></div>'
    }
    document.getElementById("gallery").innerHTML += gallery;
}




function Sortiraj(slikaNaslovAlt) {
    return function (x, y) {
        return ((x[slikaNaslovAlt] === y[slikaNaslovAlt]) ? 0 : ((x[slikaNaslovAlt] > y[slikaNaslovAlt]) ? 1 : -1));
    };
}

function SortirajNaKlik() {
    const usluge = uslugeItems.sort(Sortiraj('slikaNaslovAlt'));
    generisiUslugu(usluge);
}


function filterFunction(value) {
    return age >= 18;
  }

function filterOnClick () {
    const filter = document.getElementById('tbFilter');
    const key = filter.value.toLowerCase();
    const filtriraneUsluge = [];

    for (var i = 0; i<uslugeItems.length; i++) {
        if (uslugeItems[i].slikaNaslovAlt.toLowerCase().includes(key)) {
            filtriraneUsluge.push(uslugeItems[i]);
        }
    }

    if(filtriraneUsluge.length > 0) {
        generisiUslugu(filtriraneUsluge)
    } else {
        generisiUslugu()

    }

    if (key != 0) {
        localStorage.setItem('usluga', key);
    }
}

function resetujUsluge() {
    const filter = document.getElementById('tbFilter');
    if(filter.value < 1) {
        generisiUslugu()
    }
}

function stranica() {
    if (/index/.test(window.location.href) || window.location.pathname ==='/web-programiranje2/') {
        $.ajax({
            url: 'data/slider.json',
            success: function (json) {
                generisiSlider(json);
            }
        });
        $.ajax({
            url: 'data/pocetnaTekst.json',
            success: function (json) {
                generisiParagraf(json);
            }
        });
    } else if (/usluge/.test(window.location.href)) {
        //f-je za usluge page
        generisiUslugu();
    } else if (/kontakt/.test(window.location.href) || /kontakt1/.test(window.location.href)) {
        //f-je za kontakt page
        $.ajax({
            url: 'data/kontakt.json',
            success: function (json) {
                generisiKontakt(json);
            }
        });
    }
    else if (/gallery/.test(window.location.href)) {
        //f-je za kontakt page
        $.ajax({
            url: 'data/galery.json',
            success: function (json) {
                generisiGaleriju(json);
            }
        });
    } else {
        //f-je za sve ostale (autor page)
        $.ajax({
            url: 'data/about.json',
            success: function (json) {
                generisiAbout(json);
            }
        });
    }
}
stranica();

var da = 0;
var ne = 0;

function odgovorDa() {
    da++;
    alert(da + " : " + ne)
    var parent = document.getElementById("poll_block");
    var child = document.getElementById("poll");
    parent.removeChild(child)
}

function odgovorNe() {
    ne++;
    alert(da + " : " + ne)
    var parent = document.getElementById("poll_block");
    var child = document.getElementById("poll");
    parent.removeChild(child)
}

$.ajax({
    url: 'data/footer.json',
    success: function (json) {
        var footer = '<span>' + json.text + '<a href="' + json.link + '" target="_blank"> ' + json.ime + '</a></span><a href="' + json.url + '"> ' + json.imeLinka + '</a>'
        document.getElementById("footer").innerHTML += footer;
    }
});



$.ajax({
    url: 'data/desktopMenu.json',
    success: function (json) {
        generisiMeniDesktop(json);
        generisiMeniMobilni(json)
    }
});
