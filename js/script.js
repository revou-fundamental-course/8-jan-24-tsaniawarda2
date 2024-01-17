function calculateLuas() {
  var sisi = document.getElementById("panjangSisi").value;
  if ((sisi === "") | isNaN(sisi)) {
    alert("Panjang sisi harus valid");
    return;
  }

  var luas = sisi * sisi;

  document.getElementById("luasPersegi").innerHTML = "L = " + luas;
}

function calculateKeliling() {
  var sisi = document.getElementById("nilaiSisi").value;
  if ((sisi === "") | isNaN(sisi)) {
    alert("Panjang sisi harus valid");
    return;
  }

  var keliling = 4 * sisi;

  document.getElementById("kelilingPersegi").innerHTML = "K = " + keliling;
}

function resetLuas() {
  document.getElementById("panjangSisi").value = "";
  document.getElementById("luasPersegi").innerHTML = "";
}

function resetKeliling() {
  document.getElementById("nilaiSisi").value = "";
  document.getElementById("kelilingPersegi").innerHTML = "";
}
