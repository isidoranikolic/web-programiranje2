function val_sr() {
    var rega = /^[A-Z]{1}[a-z]{2,19}\s[A-Z]{1}[a-z]{3,29}$/;
    var reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (forma.tbime.value == "") {
        $.notify("Molimo da unesete Vaše ime i prezime");
        forma.tbime.focus();
        return false;
    }

    if (rega.test(forma.tbime.value) == false) {
        $.notify("Molimo da unesete Vaše ime i prezime ispravno");
        forma.tbime.focus();
        return false;
    }

    if (forma.tbemail.value == "") {
        $.notify("Molimo da unesete Vašu email adresu");
        forma.tbemail.focus();
        return false;
    }


    if (reg.test(forma.tbemail.value) == false) {
        $.notify("Molimo da unesete Vašu email adresu ispravno");
        forma.tbemail.focus();
        return false;
    }

    if (forma.tbpitanje.value == "") {
        $.notify("Molimo da unesete Vaše pitanje");
        forma.tbpitanje.focus();
        return false;
    }
    return true;
}
