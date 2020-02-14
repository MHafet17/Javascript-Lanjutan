// versi objek dengan protoype

// function Mahasiswa(nama,energi) {
//     this.nama = nama;
//     this.energi = energi;

//     Mahasiswa.prototype.makan = function(piring) {
//         this.energi += piring;
//         return `Halo ${nama}, selamat makan`;
//     }

//     Mahasiswa.prototype.minum = function(gelas) {
//         this.energi += gelas;
//         return `Halo ${nama}, selamat minum`;
//     }

//     Mahasiswa.prototype.tidur = function(jam) {
//         this.energi += jam;
//         return `Halo ${nama}, selamat tidur`;
//     }
// }

// let mahasiswa = new Mahasiswa('Saitama',10);

// versi class dengan protoype
class Mahasiswa {
    constructor (nama,energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan`;
    }

    minum(gelas) {
        this.energi += gelas;
        return `Halo ${this.nama}, selamat minum`;
    }

    tidur(jam) {
        this.energi += jam;
        return `Halo ${this.nama}, selamat tidur`;
    }

    main(jam) {
        this.energi -= jam;
        return `Halo ${this.nama}, selamat main`;
    }

    ubah(nakal) {
        this.nama = nakal;
        return `Halo Namamu berubah menjadi ${this.nama}`;
    }
}

let mahasiswa = new Mahasiswa('Saitama',90);


// cara kerja protoype

let angka = [1,2,3,4,5,6,7,8,9,10];
console.log(angka);


