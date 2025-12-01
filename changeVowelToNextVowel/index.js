function convertArr(array){
    //const arr =  ["a", "e", "i", "o", "u"]
    return  map = new Map(
        array.map((val, idx) => {
            return [val, array[(idx + 1) % array.length]]
        })
    )
}

const myArr = ["a", "e", "i", "o", "u"]

function changeToNextVowel(arr){
    let result = ''
    // const vowels =  ["a", "e", "i", "o", "u"]
    // const map = new Map(
    //     vowels.map((val, idx) => {
    //         return [val, vowels[(idx + 1) % vowels.length]]
    //     })
    // )
    //const map = { 'a' : 'e', 'e' : 'i', 'i' : 'o', 'o' :  'u', 'u' : 'a'}
    const map = convertArr(myArr)
    for( let ch of arr){
        //result += map.has(ch) ? map.get(ch) : ch
        result += map.hasOwnProperty(ch) ? map[ch] : ch

    }
    return result
}

//console.log("Result: ", changeToNextVowel("Hellu World"))
console.log("Result: ", changeToNextVowel("Hellu World"))