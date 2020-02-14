// Spread Operator = Memecah (expand / unpack) iterables menjadi single element

// menggabungkan array
// const nama = ['abc','bcd'];
// const dosen = ['kamil','gulpi'];
// const orang = [...nama, 'Ary', ...dosen];

// console.log(orang);

// mengcopy array
const mhs = ['hafid','deddy','hasyim'];
const mhs1 = [... mhs];
mhs1[0] = 'sujar';
console.log(mhs1);
