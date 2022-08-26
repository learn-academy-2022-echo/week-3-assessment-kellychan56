// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// PSEUDOCODE:
    // create a test starting with describe and the function name "fibSeq"
    // description of function: it takes in a number greater than 2 and returns an array with that number length
    // create expected outcomes w/ fibLength1 and fibLength2

    describe("fibSeq", () => {
        it("takes in a number that's greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence", () => {
            expect(fibSeq(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
            expect(fibSeq(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
        })
    })

    // FAIL  ./code-challenges.test.js
    // fibSeq
    //   ✕ takes in a number that's greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)

    // ● fibSeq › takes in a number that's greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence

    //   ReferenceError: fibSeq is not defined

    //     29 |         describe("fibSeq", () => {
    //     30 |             it("takes in a number that's greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence", () => {
    //   > 31 |                 expect(fibSeq(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    //        |                 ^
    //     32 |             })
    //     33 |         })
    //     34 |


    // b) Create the function that makes the test pass.

    //PSEUDOCODE:
        // declare a function named fibSeq
        // input: number that's greater than 2
        const fibSeq = (num) => {
            // declare an array, fibArr, with the 1st 2 numbers in Fibonacci sequence
            let fibArr = [1, 1]
            // create a for loop that iterates through the number length
            // start for loop at i = 2 since there are already 2 items in fibArr
            for (let i = 2; i < num; i++) {
                // make a new index in fibArr that equals to the sum of the previous 2 numbers
                fibArr[i] = fibArr[i-2] + fibArr[i-1]
            }
        // output: array of Fibonacci sequence that's the length of number argument
            return fibArr
        }

        // PASS  ./code-challenges.test.js
        // fibSeq
        //   ✓ takes in a number that's greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence (3 ms)

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//PSEUDOCODE:
    // describe a test with function name oddLeastToGreatest
    // function description: it takes in an array and returns a new array of only odd numbers sorted from least to greatest
    // expected outcomes: fullArr1 --> [-9, 7, 9, 199]
    //                    fullArr2 --> [-823, 7, 23]

    describe("oddLeastToGreatest", () => {
        it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
            expect(oddLeastToGreatest(fullArr1)).toEqual([-9, 7, 9, 199])
            expect(oddLeastToGreatest(fullArr2)).toEqual([-823, 7, 23])
        })
    })

    // FAIL  ./code-challenges.test.js
    // fibSeq
    //   ✓ takes in a number that's greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence (2 ms)
    // oddLeastToGreatest
    //   ✕ takes in an array and returns a new array of only odd numbers sorted from least to greatest (2 ms)

    // ● oddLeastToGreatest › takes in an array and returns a new array of only odd numbers sorted from least to greatest

    //   ReferenceError: oddLeastToGreatest is not defined

    //     92 |     describe("oddLeastToGreatest", () => {
    //     93 |         it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    //   > 94 |             expect(oddLeastToGreatest(fullArr1)).toEqual([-9, 7, 9, 199])
    //        |             ^
    //     95 |             expect(oddLeastToGreatest(fullArr2)).toEqual([-823, 7, 23])
    //     96 |         })
    //     97 |     })

// b) Create the function that makes the test pass.

// PSEUDOCODE:
    // declare a function named oddLeastToGreatest
    // input: an array of multiple data types
    const oddLeastToGreatest = (randArr) => {
        // filter the array for data type of number AND odd number
        let filteredArr = randArr.filter(value => typeof value === "number" && value % 2 !== 0)
        // sort the new numbers from least to greatest
        filteredArr.sort((a,b) => a-b)
    // expected output: new array of only odd numbers, in numerical order
        return filteredArr

    }

    // PASS  ./code-challenges.test.js
    // fibSeq
    //   ✓ takes in a number that's greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence (2 ms)
    // oddLeastToGreatest
    //   ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest (1 ms)


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []

// PSEUDOCODE:
    // describe a function named accumulatingSum
    // function description: it takes an array and returns an array of the accumulating sum
    // expected outcomes: numbersToAdd1 --> [2, 6, 51, 60]
    //                    numbersToAdd2 --> [0, 7, -1, 11]
    //                    numbersToAdd3 --> []

    describe("accumulatingSum", () => {
        it("takes in an array and returns an array of the accumulating sum", () => {
            expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
            expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
            expect(accumulatingSum(numbersToAdd3)).toEqual([])
        })
    })

    // FAIL  ./code-challenges.test.js
    // fibSeq
    //   ✓ takes in a number that's greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence (2 ms)
    // oddLeastToGreatest
    //   ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest (1 ms)
    // accumulatingSum
    //   ✕ takes in an array and returns an array of the accumulating sum (1 ms)

    // ● accumulatingSum › takes in an array and returns an array of the accumulating sum

    //   ReferenceError: accumulatingSum is not defined

    //     159 |     describe("accumulatingSum", () => {
    //     160 |         it("takes in an array and returns an array of the accumulating sum", () => {
    //   > 161 |             expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
    //         |             ^
    //     162 |             expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
    //     163 |             expect(accumulatingSum(numbersToAdd3)).toEqual([])
    //     164 |         })

// b) Create the function that makes the test pass.

// PSEUDOCODE:
    // declare a function named accumulatingSum
    // input: an array of numbers, could also be an empty array

    // const accumulatingSum = (numArr) => {
    //     // declare an empty array that will have the sums pushed into
    //     let sumArr = []
    //     // write a conditional statement for an empty array argument
    //     if (numArr.length === 0) {
    //     // returns the declared empty array
    //         return sumArr
    //     }
    //         // else if there are values inside the array argument
    //         else if (numArr.length > 0) {
    //             // for loop iterates through the array, starting at 1
    //             for (let i = 1; i < numArr.length; i++) {
    //                 // empty array at index 0 is the number at index 0 of array argument
    //                 sumArr[0] = numArr[0]
    //                 // each index after is the sum of prev index from empty array and current value in iteration
    //                 sumArr[i] = sumArr[i-1] + numArr[i]
    //                 // expected outcome: an array of the accumulating sum
    //             }
    //             return sumArr
    //         }
    // }

    // PASS  ./code-challenges.test.js
    // fibSeq
    //   ✓ takes in a number that's greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence (3 ms)
    // oddLeastToGreatest
    //   ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest (1 ms)
    // accumulatingSum
    //   ✓ takes in an array and returns an array of the accumulating sum (1 ms)
    
// Refactored Code:
    const accumulatingSum = (numArr) => {
        let sumArr = []
        if (numArr.length > 0) {
            for (let i = 1; i < numArr.length; i++) {
                sumArr[0] = numArr[0]
                sumArr[i] = sumArr[i-1] + numArr[i]
            }
        }
        return sumArr
    }

    // PASS  ./code-challenges.test.js
    // fibSeq
    //   ✓ takes in a number that's greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence (3 ms)
    // oddLeastToGreatest
    //   ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest (1 ms)
    // accumulatingSum
    //   ✓ takes in an array and returns an array of the accumulating sum (1 ms)
