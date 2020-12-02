const { fetchData } = require("../Util/fetchData");


const partOne = (data) => {

    const validPasswords = data.filter(passwordPolicy => {
        const [occurrences, letterPolicy, password] = passwordPolicy.split(" ");

        // mutating the data to prepare it for checking
        const [firstOccurrence, secondOccurrence] = occurrences.split("-");
        const letter = letterPolicy.split(":")[0];

        const passwordContains = password.split("").reduce((accumulator, passwordLetter) => {
            
            if (passwordLetter === letter) 
                accumulator++;

            return accumulator;
        }, []);

        return (passwordContains >= firstOccurrence && passwordContains <= secondOccurrence)

    });

    return validPasswords.length;

};


const partTwo = (data) => {

    const validPasswords = data.filter(passwordPolicy => {
        const [occurrences, letterPolicy, password] = passwordPolicy.split(" ");

        // mutating the data to prepare it for checking
        const [firstIndex, secondIndex] = occurrences.split("-");
        const letter = letterPolicy.split(":")[0];

        // only if one is true (XOR)
        return (password.charAt(firstIndex - 1) === letter ^ password.charAt(secondIndex - 1) === letter)

    });

    return validPasswords.length;

};


const main = async () => {
    const Day = 2;

    // Fetch the data for the day
    const data = (await fetchData(Day))
        // remove empty strings at start or end
        .filter(res => res.length > 0);

    // get the answer for part 1
    const answerOne = partOne(data);

    console.log(`The answer to prompt one is ${answerOne}`);


    const answerTwo = partTwo(data);

    console.log(`The answer to prompt two is ${answerTwo}`);

};

main();
