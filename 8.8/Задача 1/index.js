// Переменные
let arrVowels = ['a','e','i','o','u'];
let word = "JavaScript";

// Переменная с лямбда функцией
let countVowels = (word) => {
    let newWord =  word.toLowerCase().split('');
    let count = 0;
    newWord.forEach(element => {
        for (vowel of arrVowels) {
            if (element == vowel) {
                count++;
            }
        }
    });
    return count
};

console.log(countVowels(word));