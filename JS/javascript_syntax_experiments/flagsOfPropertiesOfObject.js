let user = {
    name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

console.log(descriptor)
console.log( JSON.stringify(descriptor, null, 2 ) );

descriptor.writable = false

user.name = "Smith";

descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor)

/* дескриптор свойства:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
*/

//=======================================================================================================
//=======================================================================================================

// let user = {};
//
// Object.defineProperty(user, "name", {
//     value: "John"
// });
//
// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
//
// console.log( JSON.stringify(descriptor, null, 2 ) );
//
// Object.defineProperty(user, "name", {
//     writable: false
// });
//
// user.name = "Smith";
//
// console.log(user.name)


//====================================================================================================
//====================================================================================================

// let user = {
//     name: "John",
//     toString() {
//         return this.name;
//     },
//     age: 30
// };
//
// Object.defineProperty(user, "toString", {
//     enumerable: false
// });
//
//
// for (let key in user) console.log(key);
//
// console.log(Object.keys(user));
//
// console.log(Object.getOwnPropertyNames(user) )


//======================================================================================================
//======================================================================================================
// Object.preventExtensions(obj)
// Object.seal(obj)
// Object.freeze(obj)
// Object.isExtensible(obj)
// Object.isSealed(obj)
// Object.isFrozen(obj)