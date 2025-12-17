// function twoSum(nums, target) {
//     const map = {}; // stores number -> index
//
//     for (let i = 0; i < nums.length; i++) {
//       const complement = target - nums[i];
//
//       if (map.hasOwnProperty(complement)) {
//         // console.log("i: ", i)
//         // console.log("HasOwnProperty: ", map.hasOwnProperty(complement))
//         // console.log("map[complement]: ", map[complement])
//         // console.log("[map[complement], i]: ", [map[complement], i])
//         return [map[complement], i];
//       }
//
//       map[nums[i]] = i;
//       //console.log("map: ", map)
//     }
//
//     // Optional: return null if no solution (though problem says there is always one)
//     return null;
//   }

function twoSum(nums, target) {
    const map = new Map(); // stores number -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.has(complement)) {
            // console.log("i: ", i)
            // console.log("HasOwnProperty: ", map.hasOwnProperty(complement))
            // console.log("map[complement]: ", map[complement])
            // console.log("[map[complement], i]: ", [map[complement], i])
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
        console.log("map: ", map)
    }

    // Optional: return null if no solution (though problem says there is always one)
    return null;
}

const nums = [0, 3,  2, 8, 11, 7, 15];
const target = 10;

const result = twoSum(nums, target);
//console.log("Result: ", result);

//complement = 9 - 0 = 9








// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// async function demo() {
//     for (let i = 0; i < 5; i++) {
//         console.log(`Waiting ${i} seconds...`);
//         await sleep(i * 1000);
//     }
//     console.log('Done');
// }
//
// demo();




















