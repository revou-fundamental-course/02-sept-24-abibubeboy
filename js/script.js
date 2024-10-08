// Hitung Luas Segitiga
const alasSg = document.getElementById("panjang-alas-sg");
const tinggiSg = document.getElementById("tinggi-sg");
const hitungLsg = document.getElementById("hitung-luas-sg");
const outputLsg = document.getElementById("output-luas-sg");

hitungLsg.addEventListener("click", function (event) {
  event.preventDefault();
  let a = alasSg.value;
  let t = tinggiSg.value;
  let l = 0.5 * a * t;

  document.getElementById("input-alas").innerHTML = a;
  document.getElementById("input-tinggi").innerHTML = t;
  document.getElementById("luas-sg").innerHTML = l;

  outputLsg.style.display = "block";

  // Validasi Luas Segitiga
  if (a == "" || t == "") {
    alert(
      "Form masih ada yang kosong guys, hasilnya jadi belum maksimal nihh!! silahkan isi semua form terlebih dahulu untuk mengetahui hasil maksimal sesuai dengan rumusnya, terima kasihh :)"
    );
  }
  console.log(a);
  console.log(t);
});

// Hitung Keliling Segitiga
const sisi1 = document.getElementById("sisi1-sg");
const sisi2 = document.getElementById("sisi2-sg");
const sisi3 = document.getElementById("sisi3-sg");
const hitungklsg = document.getElementById("hitung-kll-sg");
const outputKlsg = document.getElementById("output-kll-sg");

hitungklsg.addEventListener("click", function (event) {
  event.preventDefault();
  let s1 = parseFloat(sisi1.value) || 0;
  let s2 = parseFloat(sisi2.value) || 0;
  let s3 = parseFloat(sisi3.value) || 0;
  let k = s1 + s2 + s3;

  document.getElementById("input-sisi1-sg").innerHTML = s1;
  document.getElementById("input-sisi2-sg").innerHTML = s2;
  document.getElementById("input-sisi3-sg").innerHTML = s3;
  document.getElementById("kll-sg").innerHTML = k;

  outputKlsg.style.display = "block";

  // Validasi  Keliling Segitiga
  if (s1 == "" || s2 == "" || s3 == "") {
    alert(
      "Form masih ada yang kosong guys, hasilnya jadi blm maksimal nihh!! silahkan isi semua form terlebih dahulu untuk mengetahui hasil maksimal  sesuai dengan rumusnya, terima kasihh :)"
    );
  }
  console.log(s1);
  console.log(s2);
  console.log(s3);
});

//Hitung Luas Jajar Genjang
const alasJg = document.getElementById("alas-jg");
const tinggiJg = document.getElementById("tinggi-jg");
const hitungLjg = document.getElementById("hitung-luas-jg");
const outputLjg = document.getElementById("output-luas-jg");

hitungLjg.addEventListener("click", function (event) {
  event.preventDefault();
  let a = parseFloat(alasJg.value) || 0;
  let t = parseFloat(tinggiJg.value) || 0;
  let l = a * t;

  document.getElementById("input-alas-jg").innerHTML = a;
  document.getElementById("input-tinggi-jg").innerHTML = t;
  document.getElementById("luas-jg").innerHTML = l;

  outputLjg.style.display = "block";

  // Validasi Luas Jajar Genjang
  if (a == "" || t == "") {
    alert(
      "Form masih ada yang kosong guys, hasilnya jadi belum maksimal nihh!! silahkan isi semua form terlebih dahulu untuk mengetahui hasil maksimal sesuai dengan rumusnya, terima kasihh :)"
    );
  }
  console.log(a);
  console.log(t);
});

// Hitung Keliling Jajar Genjang
const abJg = document.getElementById("ab-jg");
const bcJg = document.getElementById("bc-jg");
const cdJg = document.getElementById("cd-jg");
const daJg = document.getElementById("da-jg");
const hitungKlJg = document.getElementById("hitung-kll-jg");
const outputKlJg = document.getElementById("output-kll-jg");

hitungKlJg.addEventListener("click", function (event) {
  event.preventDefault();
  let ab = parseFloat(abJg.value) || 0;
  let bc = parseFloat(bcJg.value) || 0;
  let cd = parseFloat(cdJg.value) || 0;
  let da = parseFloat(daJg.value) || 0;
  let k = ab + bc + cd + da;

  document.getElementById("input-ab-jg").innerHTML = ab;
  document.getElementById("input-bc-jg").innerHTML = bc;
  document.getElementById("input-cd-jg").innerHTML = cd;
  document.getElementById("input-da-jg").innerHTML = da;
  document.getElementById("kll-jg").innerHTML = k;

  outputKlJg.style.display = "block";

  // Validasi Keliling Jajar Genjang
  if (ab == "" || bc == "" || cd == "" || da == "") {
    alert(
      "Form masih ada yang kosong guys, hasilnya jadi belum maksimal nihh!! silahkan isi semua form terlebih dahulu untuk mengetahui hasil maksimal sesuai dengan rumusnya, terima kasihh :)"
    );
  }
  console.log(ab);
  console.log(bc);
  console.log(cd);
  console.log(da);
});

// Button Reset Semua
function clearAnswer(event) {
  document.getElementById("inputAnswer").innerHTML = "";
}
