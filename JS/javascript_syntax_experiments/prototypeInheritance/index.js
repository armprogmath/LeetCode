// let animal = {
//     eats: true
// };
//
// let rabbit = {
//     jumps: true
// };
//
// rabbit.__proto__ = animal; // (*)
//
// // теперь мы можем найти оба свойства в rabbit:
// console.log( rabbit.eats ); // true (**)
// console.log( rabbit.jumps ); // true


///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

// let animal = {
//     eats: true,
//     walk() {
//         console.log("Animal walk");
//     }
// };
//
// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };
//
//
//
// // walk взят из прототипа
// rabbit.walk(); // Animal walk

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// let animal = {
//     eats: true,
//     walk() {
//         console.log("Animal walk");
//     }
// };
//
// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };
//
// let longEar = {
//     earLength: 10,
//     __proto__: rabbit
// };
//
// // walk взят из цепочки прототипов
// longEar.walk(); // Animal walk
// console.log(longEar.jumps); // true (из rabbit)

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// let animal = {
//     eats: true
// };
//
// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };
//
// // Object.keys возвращает только собственные ключи
// console.log(Object.keys(rabbit)); // jumps
//
//
//
// // for..in проходит и по своим, и по унаследованным ключам
//  for(let prop in rabbit) console.log(prop); // jumps, затем eats

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

// let animal = {
//     jumps: null
// };
//
// let rabbit = {
//     __proto__: animal,
//     jumps: true
// };
//
// console.log( rabbit.jumps ); // true (1)
//
// delete rabbit.jumps;
//
// console.log( rabbit.jumps ); // null (2)
//
// delete animal.jumps;
//
// console.log( rabbit.jumps ); // undefined (3)