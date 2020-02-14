// Destructuring adalah expression pada javascript untuk menmbongkar nilai array dan properti dalam object kedalam  variabel terpisah

// destructuring array

// teknik biasa
// const mhs = ['hafidz',20,'17010197'];
// const nama = mhs[0];
// console.log(nama);

// destructuring
// const  mhs = ['hafidz',20,'17010197'];
// const code = [nama,umur,nim] = mhs;
// console.log(nim);

// scipt destructuring
// const  mhs = ['hafidz',20,'17010197','unuja'];
// const code = [nama, , ,nim ,] = mhs;
// console.log(nama);

// swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);

// [a,b] = [b,a];
// console.log(a);
// console.log(b);

// return value pada function
// function value() {
//   return [1,2];
// }
// const [a,b] = value();
// console.log(a);

// Rest Parameter = ... values
// const [a,b, ...values] = [1,2,3,7,8,9,0];
// console.log(values);

    // --- Destructuring Object ---

  // teknik biasa
  // const mhs = {
  //   nama: 'M Hafiz',
  //   nim: 17010197,
  //   hobby: ['makan','minum','tidur','ngoding']
  // }

  // const {nama,nim,hobby} = mhs;
  // console.log(hobby);

// assign ke variabel baru dan menambahkan default value
// const mhs = {
//     nama: 'M Hafiz',
//     nim: 17010197,
//   }

//   const { nama :n, nim: m, email = 'pusdikom@gmail.com' } = mhs;
//   console.log(email);

  // Rest Parameter
  // const mhs = {
  //   nama: 'M Hafiz',
  //   nim: 17010197,
  //   umur: 21
  // }

  // const { nama , ...values} = mhs;
  // console.log(values);

//  mengambil field pada object setelah dikirim sebagai paramater ke function
  const mhs = {
    id: 13493941003499,
    nama: 'M Hafidz',
    nim: 17010197,
    umur: 21
  }

  function getApi(mhs) {
     return mhs.id
  }

  console.log(getApi(mhs));
