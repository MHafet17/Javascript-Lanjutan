// high order function = adalah sebuah function yang beroperasi pada function yang lain,
//  baik itu digunakan dalam argumen, maupun sebagai return value , {{ eloquentjavascript.net }}

// alasan kenapa menggunakan high order function = abstraksi (membuat sebuah kode lebih 
// sederhana)
// semakin besar sebuah program, semakin tinggi kompleksitasnya, semakin membingunggkan 
// programmer nya

// contoh high order function

function selesai() {
  alert('selamat mengerjakan');
}
// function kerjakantugas = higher order function
// callback = function selesai yang sebagai argumen/parameter

function kerjakanTugas(matakuliah, selesai) {
  console.log(`Mulai kerjakan tugas ${matakuliah}` );
  selesai();
}

kerjakanTugas('pemrograman web',selesai);
