function areOccurrencesEqual(s) {
    let map = new Map();

    for(let char of s) {
        if(!map.has(char)) {
            map.set(char, 1)
        } else {
            map.set(char, map.get(char) + 1)
        }
    };

    let convertArray = Array.from(map.values())

    let value = convertArray[0];

    return convertArray.every((item) => item === value)
};


console.log(areOccurrencesEqual('abcabc'))

// abacbc => a b a c b c  => (2a) (2b) (2c) => all characters occur 2 times => return true
// aaabb => a a a b b => (3a) (2b) =>  characters 'a' occur 2 times, characters 'b' occur 3 times => return false

// STEPS:

// step 1: Loop 'string'
// step 2: Save characters in 'map' with ( value = 1 ), if characters first appearace
// step 3: If characters in 'map' => value + 1
// step 4: Coverts 'map' to Array, map.getValues()
// step 5: Get first 'value' in Array
// step 6: Check all values in Array equal 'value'

