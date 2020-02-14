// Execution Context, Hoisting & Scope

// var nama = 'Hafidz';
// console.log(nama);

// creation phase pada global context
// nama var = undefined
// nama function = fn()
// hoisting
// window = global object
// this = window

// execution phase

var nama = 'Shandika';
var username = '@shandika';

function cetakURL(username) {
    var instagramURL = 'https:://www.instagram.com/';
    return instagramURL + username;
}
console.log(cetakURL(username));