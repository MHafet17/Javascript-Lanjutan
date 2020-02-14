// Closure

// TODO CLosure merupakan kombinasi antara function dan lingkungan leksisal (lexical scope) didalam function tersebut - MDN
// * Closure adalah sebuah function ketika memiliki akses ke parent scope nya, walaupun parent scope nya sudah dieksekusi - W3school
// * Closure adalah sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat ia ciptakan - Code Fellow
// * Closure adalah sebuah function yang sebelumnya sudah memiliki data , hasil dari function yang lain - Techsith
// ! kenapa menggunakan function = 1.untuk membuat private method, 2.untuk membuat function factories

function init() {
    let name = 'M Hafidz Masruri'; // local variable
    function viewName() { // inner function (*closure)
        console.log(name); // access to parent variable
    }
    viewName();
}
init();