let map =  new Map();
console.log(map)
map.set(true, "John");
map.set("Smith", "Johnson");

console.log(map)
console.log(map.get(true))
console.log("Size: ", map.size)

console.log("Keys:    ===>", map.keys())
console.log("Entries: ===>", map.entries())
console.log("Values:  ===>", map.values())

console.log("Has Key 'Smith': ", map.has("Smith"))

let john = { name: "John", "age": 30 };
map.set(john, 123);

console.log("Object.entries: ", john)

console.log("get object: ", map.get(john))
console.log("====", map)

console.log("====================================================================")

let recipeMap = new Map([
    ["banana", 500],
    ["tomato", 350],
    ["cucumber",    50]
]);

console.log("recipeMap: ", recipeMap)

for (let vegetable of recipeMap.keys()) {
    console.log(vegetable);
}


for (let vegetable of recipeMap.values()) {
    console.log(vegetable);
}

for (let vegetable of recipeMap) {
    console.log(vegetable);
}

recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
});


console.log("====================================================================")

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

// prices = { banana: 1, orange: 2, meat: 4 }

console.log("prices.orange: ", prices.orange); // 2

console.log("========================== SET ==========================================")

let set = new Set();

let lily = { name: "Lily" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// считаем гостей, некоторые приходят несколько раз
set.add(lily);
set.add(pete);
set.add(mary);
set.add(lily);
set.add(mary);

// set хранит только 3 уникальных значения
console.log(set.size); // 3
console.log("SET: ", set)

for (let user of set) {
    console.log(user.name); // John (потом Pete и Mary)
}

let set1 = new Set(["апельсин", "яблоко", "банан"]);

for (let value of set1) console.log(value);

// то же самое с forEach:
set1.forEach((value, valueAgain, set) => {
    console.log("value: ", value);
    console.log("valueAgain: ", valueAgain)
    console.log("SET: ", set)

});