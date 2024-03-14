const word1 = "listen";
const word2 = "silent";

if (word1.length !== word2.length) {
    console.log(`${word1} ve ${word2} anaqram deyil.`);
} else {
    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');

    if (sortedWord1 === sortedWord2) {
        console.log(`${word1} ve ${word2} anaqramdır.`);
    } else {
        console.log(`${word1} ve ${word2} anaqram deyil.`);
    }
} 