const data = {
    id: 1,
    name: "John",
    info: {
        age: 30,
        address: {
            city: "Yerevan",
            zip: 12345
        },
        contacts: [
            { type: "email", value: "john@example.com" },
            { type: "phone", value: "+37499123456" }
        ]
    }
};








function findValueByKey(obj, keyToFind) {
    if (typeof obj !== 'object' || obj === null) return null;

    for (const key in obj) {
        if (key === keyToFind) return obj[key];
        const found = findValueByKey(obj[key], keyToFind);
        if (found !== null) return found;
    }

    return null;
}

// Example:
//console.log(findValueByKey(data, 'city')); // "Yerevan"
console.log(findValueByKey(data, 'zip'));  // 12345