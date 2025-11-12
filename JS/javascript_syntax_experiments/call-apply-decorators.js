function fib(x){
    if(x === 0 || x === 1) return 1
    return fib(x - 1) + fib(x - 2)
}


function caching(func){
   let cache = new Map()

    return function(x) {
       if(cache.has(x)) {
           return cache.get(x)
       }

        let result = func(x);
        cache.set(x, result);

        return result
    }
}


 fib = caching(fib)

console.log(fib(42))




// function slow(x) {
//    if(x === 0 || x === 1) return 1
//     //console.log(`Called with ${x}`);
//     return slow(x - 1) + slow(x - 2);
// }
//
// function cachingDecorator(func) {
//     let cache = new Map();
//
//     return function(x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//
//         let result = func(x);
//
//         cache.set(x, result);
//         return result;
//     };
// }
//
// slow = cachingDecorator(slow);
//
// console.log( "Function calls", slow(1000) );
// //console.log( "From Cache: " + slow(55) );
//
// // console.log("Function calls", slow(2) );
// // console.log( "From Cache: " + slow(2) );
//
// // function slow(x) {
// //     if(x === 0 || x === 1) return 1
// //     //console.log(`Called with ${x}`);
// //     return slow(x - 1) + slow(x - 2);
// // }
//
// console.log("Fib Results: ", slow(40))