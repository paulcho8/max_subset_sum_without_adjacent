function maxSubsetSumNoAdjacent(array) {
    if (!array.length) return 0;
    if (array.length === 1) return array[0];
    const maxes = array.slice();
    maxes[1] = Math.max(array[0], array[1]);
    for (let i = 2; i < array.length; i++) {
        maxes[i] = Math.max(maxes[i - 1], maxes[i - 2] + array[i])
    }

    return maxes[maxes.length - 1]
}
