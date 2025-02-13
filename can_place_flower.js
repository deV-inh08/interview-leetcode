const canPlaceFlower = (flowerbed, n) => {
    let count = 0;
    for(let i = 0; i < flowerbed.length; i++) {
        if(
            flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === flowerbed.length -1 || flowerbed[i + 1] === 0)
        ) {
            flowerbed[i] = 1
            count++
            i++
        }
    }
    return Boolean(n === count)
}


console.log(canPlaceFlower([1,0,0,0,0,1], 2))

// [0, 1, 0, 1, 0, 1, 0, 1, 0]

// [1,0,0,0,0,1]

// [1,0,0,0,0,1] n = 2

// [0,0,1,0,1]  n = 1

// [1,0,0,0,0,0,1] n = 2

// [0,0,1,0,0,0,1]