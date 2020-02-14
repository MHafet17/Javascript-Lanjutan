const mhs = ['hafidz','didik','sam','zainal','deddy'];

// for cara biasa
// for (let i=0; i<mhs.length; i++) {
//   console.log(mhs[i]);
// }

// ForEach
// mhs.forEach(m => console.log(m));

// For Of Array
// for (m of mhs) {
//    console.log(m);
// }

// // For Of String
// const nama = 'M Hafidz';
// for (const n of nama) {
//   console.log(n);
// }

// mhs.forEach((m,i) =>
//     console.log(`${m} adalah mahasiswa ke-${i + 1}` ));

// NodeList
// const LiNama = document.querySelectorAll('.nama');
// LiNama.forEach(n => console.log(n.textContent));

// Arguments
// function code() {
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//     return jumlah
// }

// console.log(code(1,2,3,4,5));

// For In
const mhm = {
  id: 13493941003499,
  nama: 'M Hafidz',
  nim: 17010197,
  umur: 21
}

for (m in mhm) {
  console.log(mhm[m]);
}