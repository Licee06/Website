const namaSaya = "Fico Aldi Saputro";
let usia = 40;

let biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
  let golongan;

  if (usia > 2 && usia < 11) {//true
    //INI ADALAH KONDISI PERTAMA
    golongan = "Anak anak";
  }
  else if (usia > 10 && usia < 18) {
    golongan = "Remaja";
  }
  else if (usia > 17 && usia < 31) {
    golongan = "Dewasa";
  }
  else if (usia > 30) {
    golongan = "Lansia";
  }
  else {//false
    //INI ADALAH KONDISI JIKA TIDAK TERPENUHI
    golongan = "Bayi";
  }

  return biodata.innerHTML = golongan;  
}

// console.log(namaSaya);
// console.log(usia);

generateBiodata();