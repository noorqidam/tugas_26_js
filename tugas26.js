function tugas26() {

  var angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

  for (i = 0; i < angka.length; i++) {
    var j = isFinite(angka[i]);
    if (j == true) {
      console.log("Angka", angka[i], "is NOT Infinity");
    }else{
      console.log("Angka", angka[i], "is Infinity");
    }
  }
}

tugas26();
