// cara membuat objek pada javascript


// method : function didalam objek

// 1.Objek Literal
let mahasiswa1 = {
    nama: 'Saitama',
    energy: 90,
    makan: function(porsi) {
        this.energy = this.energy + porsi;
        console.log(`halo`, this.nama, 'Selamat Makan'); // string literal
    }
 }

let mahasiswa2 = {
    nama: 'Genos',
    energy: 50,
    makan: function(porsi) {
        this.energy = this.energy + porsi;
        console.log(`halo`, this.nama, 'Selamat Makan'); // string literal
    }
 }

// 2.Function Declaration
function Mahasiswa(nama,energy) {
    let mahasiswa = {};

    mahasiswa.nama = nama;
    mahasiswa.energy = energy;

    mahasiswa.makan = function(porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    },

    mahasiswa.main = function(jam) {
        this.energy -= jam;
        console.log(`halo ${this.nama}, selamat bermain`);
    }
        return mahasiswa;
}

let sensei = Mahasiswa('Sensei',10);
let senpai =  Mahasiswa('Senpai',20);

// 3. Constructor Function
function Mahasiswa(nama,energy) {
    this.nama = nama;
    this.energy = energy;

    this.makan = function(porsi) {
        this.energy += porsi;
        console.log(`Halo ${this.nama}, selamat makan`);
    }

    this.main = function(jam) {
        this.energy -= jam;
        console.log(`halo ${this.nama}, selamat bermain`);
    }
}
let akatsuki = new Mahasiswa('akatsuki',10);


