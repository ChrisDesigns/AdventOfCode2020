const { fetchData } = require("../Util/fetchData");


const partOne = (data) => {

    const moveRightAmount = 3;


    let treesHit = 0;
    let position = 0;

    data.forEach(line => {
        // if the data at the current position is tree increase count
        if (line.charAt(position) === "#")
            treesHit++;
        position = (position + moveRightAmount) % line.length;

    });

    return treesHit;

};


const partTwo = (data) => {

    const slopes = [ [1, 1], [3, 1], [5, 1], [7, 1], [1, 2] ];

    let treeHitarr = Array(slopes.length).fill(0);
    let position = Array(slopes.length).fill(0);

    data.forEach( (line, currentLine) => {
        
        slopes.forEach( (slope, currentSlope) => {

            const [moveRightAmount, moveDownAmount] = slope;

            // if it's a tree and it is a line that isn't skipped
            if (line.charAt(position[currentSlope]) === "#" && currentLine % moveDownAmount === 0)
                treeHitarr[currentSlope]++;

            position[currentSlope] = (position[currentSlope] + moveRightAmount) % line.length;
        });


    });

    // multiply all the answers
    const treeCountProduct = treeHitarr.reduce((a, b)=> a * b, 1);

    return treeCountProduct;

};


const main = async () => {
    const Day = 3;

    // Fetch the data for the day
    const data = (await fetchData(Day))
        // remove empty strings at start or end
        .filter(res => res.length > 0);

    // get the answer for part 1
    const answerOne = partOne(data);

    console.log(`The answer to prompt one is ${answerOne}`);

    // get the answer for part 2
    const answerTwo = partTwo(data);

    console.log(`The answer to prompt two is ${answerTwo}`);

};

main();
