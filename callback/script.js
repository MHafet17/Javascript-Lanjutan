// callback = adalah sebuah function yang dikirimkan sebagai parameter pada function yang lain


// synchronous callback
// function halo(nama) {
//     alert(`${nama}`)
// }

// function tampilPesan(callback) {
//     const nama = prompt('masukkan nama :')
//     callback(nama)
// }

// tampilPesan(halo)


// const mhs = [
//     {
//         'nama': 'M Hafid Masruri',
//         'nim': 17010197,
//         'email': 'do.crazy192@gmail.com'
//     },
//     {
//         'nama': 'Deddy Gunawan',
//         'nim': 17010199,
//         'email': 'deddygunawan98@gmail.com'
//     },
//     {
//         'nama': 'Hasyim Asyari',
//         'nim': 17010144,
//         'email': 'wibu1998@gmail.com'
//     }
// ];


// console.log('mulai');
// mhs.forEach(m => console.log(m.nama))
// console.log('selesai');


// Asynchronous
// Jquery
console.log('mulai');
$.ajax({
    url: 'mahasiswa.json',
    success: (mhs) => {
        mhs.forEach(m => console.log(m.nama));
    },
    error: (e) => {
        console.log(e.responseText);

    }
})
console.log('selesai');