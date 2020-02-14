// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih yang web progamming
const jslanjut  = videos.filter(video => video.textContent.includes('Web'))

// ambil durasi dari masing2 video
 .map(item => item.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
 .map(waktu => {
  //  10.30 -> [10,30] split
 const parts = waktu.split(':').map(part => parseFloat(part))
 return (parts[0] * 60) + parts[1];
 })


// jumlahkan semua detiknya

// ubah format nya jadi jam menit detik

// simpan di DOM
console.log(jslanjut);