function mergeSort(arr) {
    if (arr.length === 1) return arr;
    
    const firstSub = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
    const secSub = mergeSort(arr.slice(Math.floor(arr.length / 2), arr.length));

    const numValues = firstSub.length + secSub.length;
    const sorted = [];
    for (let i = 0; i < numValues; i++) {
        // if a list is empty, copy the other list into the sorted arr
        if (firstSub.length === 0) return [...sorted, ...secSub];
        else if (secSub.length === 0) return [...sorted, ...firstSub];

        // get smallest value from the front of each list and sort it
        const frontMin = Math.min(firstSub[0], secSub[0]);
        sorted.push(frontMin);

        // remove it from its arr
        if (firstSub[0] === frontMin) firstSub.splice(0, 1);
        else secSub.splice(0, 1);
    }
}