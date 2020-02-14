const angka = [1,9,7,3,2,5,6,2,1,8];

// filter
// for

// const newAngka = [];
// for (i=0; i < angka.length; i++) {
// 	if (angka[i] >= 3) {
// 		newAngka.push(angka[i]);
// 	}
// }

// console.log(newAngka);

// filter arrow function

// const tampil = angka.filter(a => a >= 3);
// console.log(tampil);

// map

// const map = angka.map(a => a * 2);
// console.log(angka);
// console.log(map);

// reduce
// jumlahkan semua elemen pada array

// const reduce = angka.reduce((accumulator,currentValue) =>
// 	accumulator + currentValue, 1);
// console.log(reduce);

// method chaining
// cari >= 5
// kalikan 3
// jumlahkan

const jumlah = angka.filter(a => a > 5) // 5,6,7,8,9
	  .map(a => a * 3 / 2) // 15,18,21,24,27
	  .reduce((acc,cur) => acc + cur); // 153

console.log(jumlah);
