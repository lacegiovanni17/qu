// describe("Example Tests", () => {
//   test("Example 1", () => {
//     expect(findNonUnique([2, 1, 2, 5])).toEqual([2]);
//   });

//   test("Example 2", () => {
//     const output = findNonUnique([1, 2, 2, 3, 3, 3]);
//     expect(output).toEqual(expect.arrayContaining([2, 3]));
//     expect(output.length).toBe(2);
//   });

function findNonUnique(arr) {
    const seen = []; 
    const duplicates = []; 
    for (let number of arr) {
        if (seen.includes(number)) {
            if (!duplicates.includes(number)) {
                duplicates.push(number);
            }
        }
        seen.push(number); 
    }
    return duplicates;
}

console.log(findNonUnique([2, 1, 2, 5]));