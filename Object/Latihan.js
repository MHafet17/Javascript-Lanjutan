
// Latihan Object

// 1.Objek Literal
// Problem : tidak efeltif jika menggunakan banyak objek karena akan menghabiskan resource
// let mahasiswa = {
//     name: 'Saitama',
//     ability: 90,
//     belajar: function(ngoding) {
//         this.ability += ngoding;
//         // console.log(`halo ${this.name}, selamat belajar`);
//         alert(`halo ${this.name}, selamat belajar`)
//     },
//     bermain: function(malas) {
//         this.ability -= malas;
//         // console.log(`halo ${this.name}, selamat bermain`);
//         alert(`halo ${this.name}, selamat bermain`)
//     }
// }

// 2.Function Declaration dengan Object.create

methodMahasiswa = {
    belajar: function (ngoding) {
        this.ability += ngoding;
        console.log(`halo ${this.nama}, selamat belajar`);
    },
    main: function (jam) {
        this.ability -= jam;
        console.log(`halo ${this.nama}, selamat main`);
    },
    tidur: function(jam) {
        this.ability += jam * 2;
        console.log(`halo ${this.nama}, selamat tidur`);
    }
}

function Mahasiswa(nama,ability) {
    let mahasiswa = Object.create(methodMahasiswa);

    mahasiswa.nama = nama;
    mahasiswa.ability = ability;

    return mahasiswa;
}

mahasiswa = Mahasiswa('Naruto',10);

// 3.Constructor Function

// function Mahasiswa(nama,ability) {

//     this.nama = nama;
//     this.ability = ability;
//     this.belajar = function (ngoding) {
//         this.ability += ngoding;
//         console.log(`halo ${this.nama}, selamat belajar`);
//     }
// }

// let mahasiswa = new Mahasiswa('Saitama',90);
// let siswa = new Mahasiswa('Genos',80);



