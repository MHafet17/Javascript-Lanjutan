// destructor function

// function kalkulasi(a,b) {
//   return [a+b, a-b, a*b, a/b];
// }

// const [jumlah, kurang, kali, bagi] = kalkulasi(2,10);
// console.log(bagi);

// objek destructuring
function kalkulasi(a,b) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  }
}

const {tambah, kurang, kali, bagi} = kalkulasi(3,8);
// console.log(kali);

const mhs1 = {
  nama: 'Pusdikom',
  ngoding: 'HTML',
  nilai: {
    tugas: 75,
    uts: 90,
     uas: 80
  }
}

function cetak({nama,ngoding, nilai: {tugas, uas, uts} }) {
    return `nama saya ${nama}, dan saya ngoding ${ngoding},
     dengan nilai uas ${uas}`;
}
console.log(cetak(mhs1));