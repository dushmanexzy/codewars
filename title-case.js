function titleCase(title, minorWords) {
    const transformedWords = title.toLowerCase().split(' ');
    const transformedMinorWords = minorWords ? minorWords.toLowerCase().split(' ') : [];
    const wordsIndexesInLower = [];

    for (const minorWord of transformedMinorWords) {
        transformedWords.forEach((word, index) => {
            if (minorWord === word) {
                wordsIndexesInLower.push(index);
            }
        });
    }
    
    const resultWords = transformedWords.map((word, index) => {
        console.log(index === wordsIndexesInLower[0]);
        if (wordsIndexesInLower.includes(index) && index !== 0) {
            return word;
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
        }
    })
    
    return resultWords.join(' ');
}

console.log(titleCase(''));
console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(titleCase('the quick brown fox'));