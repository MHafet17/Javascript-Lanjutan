// TODO Arrow Function

// TODO Arrow function adalah bentuk lain yang lebih ringkas dari function expression

// 1 parameter
// const tampilNama = (nama) => {return `Halo ${nama}`}
// console.log(tampilNama('M Hafidz'));

// implisit return
// const tampilNama = nama => `Halo ${nama}`;
// console.log(tampilNama('M Hafidz'));

// 2 parameter
// const data = (nama,umur) => {
//     return `nama: ${nama}, umur: ${umur}`;
// }
// console.log(data('hafid','20'));

let mahasiswa = ["Uchiha Sasuke", "Uchihiha Itachi", "Uchiha Madara"];

// let jumlah = mahasiswa.map(function(nama) {
//     return nama.length;
// });

// console.log(jumlah);

let jumlahHuruf = mahasiswa.map(nama => nama.length);
console.log(jumlahHuruf);

let tampilNama = mahasiswa.map(nama => ({ nama, jumlahHuruf: nama.length }));
console.table(tampilNama);
