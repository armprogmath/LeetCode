function sum(...args){
    return args.reduce(( acc, curr) => acc + curr, 0)
}

function curry(fn, arity = fn.length){
    return function curried(...args){
        if(arity && args.length >= arity){
            console.log()
            return fn.apply(this, args);
        }
        else if(!arity){
            return function (...nextArgs){
                if(nextArgs.length === 0){
                    return fn.apply(this, args)
                }
                return curried.apply(this, args.concat(nextArgs))
            }
        }
        else {
            return function (...nextArgs){
                return curried.apply(this, args.concat(nextArgs));
            }
        }
    }
}

const myCurry = curry(sum)
console.log(myCurry(1)(2)(9,3)())