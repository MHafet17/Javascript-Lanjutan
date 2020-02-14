// Template Literals

// Menggunakan backtick
// Multi Line String
// Embedded Expression
// HTML Fragment
// Expression Interpolation
// Tagged Template


// 1. HTML Fragment
// const mhs = {
//   nama: 'M Hafidz Masruri',
//   umur: 21,
//   nim: '17010197',
//   email: 'do.crazy192@gmail.com'
// };

// const el = `<div class="mhs">
// <h3>${mhs.umur}</h3>
// <h3>${mhs.email}</h3>
// <h3>${mhs.nim}</h3>
// <h3>${mhs.nama}</h3>
// </div>`;

// 2. looping (array of object)

// const mhs = [
//   {
//     nama: 'M Hafid',
//     nim: 17010197,
//   },
//   {
//     nama: 'Hasyim Asyari',
//     nim: 17010151,
//   },
//   {
//     nama: 'Zainal Abidin',
//     nim: 180101101,
//   },
// ]

// const el = `<div class="mhs">
//   ${mhs.map(m => `<ul>
//   <li> ${m.nama} </li>
//   <li> ${m.nim} </li>
//   </ul>`).join('')}
// </div>`

// 3. Conditionals
// ternary
// const lagu = {
//   judul: 'Blue Bird',
//   author: 'Naruto Shippuden',
//   feat: 'Uchiha Sasuke'
// }
// const el = `<div>
// <ul>
//   <li> judul : ${lagu.judul} </li>
//   <li> author : ${lagu.author} ${lagu.feat ? `(feat. ${lagu.feat})` : ''} </li>
// </li>
// </div>`

// 4.Nested IF

const mhs = {
  nama: 'M Hafid',
  semester: 5,
  matakuliah: [
    'Rekayasa Web',
    'ALgoritma Java',
    'Data Analisis',
    'Struktur Data'
  ]
}

function cetakMakul(makul) {
  return `
  <ol>
      ${makul.map(mk => `<li>  ${mk} </li>`).join('')}
  </ol>
  `;
}

const el = /*html*/ `<div class="mhs">
<h3> nama : ${mhs.nama} </h3>
<h3> semester : ${mhs.semester} </h3>
   ${cetakMakul(mhs.matakuliah)}
</div>`

document.body.innerHTML = el;