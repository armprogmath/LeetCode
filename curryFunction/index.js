function sum(...args){
    return args.reduce((acc, cur) => acc + cur, 0);
}


// function curry(fn) {
//     return function curried(...args) {
//         if(args.length >= fn.length){
//             fn.apply(this, args);
//         } else {
//             return function (...nexArgs){
//                 return curried.apply(this, args.concat(nexArgs))
//             }
//         }
//     }
// }

const myCurry = curry(sum)

//console.log(myCurry(1, 2, 4)())
console.log(myCurry(1)(2)(3)())

function curry(fn, arity = fn.length) {
    return function curried(...args) {
        if (arity && args.length >= arity) {
            return fn.apply(this, args);
        }
        else if (!arity) {
            // if function has no defined arity (like sum(...args)), return a wrapper
            return function (...nextArgs) {
                if (nextArgs.length === 0) return fn.apply(this, args);
                return curried.apply(this, args.concat(nextArgs));
            };
        }
        else {
            return function (...nextArgs) {
                return curried.apply(this, args.concat(nextArgs));
            };
        }
    };
}