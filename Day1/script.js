const { fetchData } = require("../Util/fetchData");


// this is a simple two sum problem - but multiply
const partOne = (inputArr, sumTarget) => {

    const iteratedSet = new Set();

    // check each element in array
    return inputArr.reduce((accumulator, element) => {

        //  Check to see if 2020 - current pair exists 
        const sumPair = sumTarget - element;

        // check if the pair exists, then it is a valid answer
        if (iteratedSet.has(sumPair))
            accumulator.push(element * sumPair);

        // add the value to the set for later reference
        iteratedSet.add(element);

        return accumulator;
    }, []);

};


// the three sum problem - unlike two sum we'll need to check neighbors
const partTwo = (inputArr, sumTarget) => {

    // we need to sort the values by asc order
    inputArr.sort((a, b) => a - b);

    return inputArr.reduce((accumulator, element, index) => {

        let frontPointer = index + 1;
        let backPointer = inputArr.length - 1;

        while (frontPointer < backPointer) {

            const sum = element + inputArr[frontPointer] + inputArr[backPointer];

            // value adds to the proper sum
            if (sum === sumTarget) {
                // calculate the sum and move pointers to see if any more sums exists for set
                const product = element * inputArr[frontPointer++] * inputArr[backPointer--]
                accumulator.push(product);

            // the sum is too large and must move to smaller numbers
            } else if (sum > sumTarget) {
                backPointer--;

            // number is too small so we need to add a bigger number from left side
            } else {
                frontPointer++;
            }

        }

        return accumulator;
    }, []);

};

const main = async () => {
    const Day = 1;

    // Fetch the data for the day
    const data = await fetchData(Day)
        // convert to numbers
        .then(res => { return res.map(Number) });

    // get the answer for part 1
    const answerOne = partOne(data, 2020);

    console.log(`The answer to prompt one is ${answerOne}`);

    const answerTwo = partTwo(data, 2020);

    console.log(`The answer to prompt two is ${answerTwo}`);

};

main();
