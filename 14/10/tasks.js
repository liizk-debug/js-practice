// 1. Удаление дубликатов
function uniqueArray(arr) {
    return [...new Set(arr)];
}
console.log("1.", uniqueArray([1, 2, 2, 3, 3, 4]));

// 2. Фильтр положительных чисел
function positiveNumbers(arr) {
    return arr.filter(num => num > 0);
}
console.log("2.", positiveNumbers([-2, 5, 0, 3, -1]));

// 3. Сумма и среднее массива
function sumAndAverage(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    let average = arr.length ? sum / arr.length : 0;
    return { sum, average };
}
console.log("3.", sumAndAverage([2, 4, 6, 8]));

// 4. Максимум из трёх чисел
function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}
console.log("4.", maxOfThree(5, 9, 3));

// 5. Проверка чётности
function evenOrOdd(num) {
    return num % 2 === 0 ? "Чётное" : "Нечётное";
}
console.log("5.", evenOrOdd(7));

// 6. Подсчёт повторений слов
function countWords(text) {
    let words = text.toLowerCase().split(/\s+/);
    let result = {};

    for (let word of words) {
        result[word] = (result[word] || 0) + 1;
    }

    return result;
}
console.log("6.", countWords("кот пес кот кот пес"));

// 7. Второе по величине уникальное число
function secondLargest(arr) {
    let numbers = [...new Set(arr)].sort((a, b) => b - a);
    return numbers.length > 1 ? numbers[1] : null;
}
console.log("7.", secondLargest([5, 8, 3, 8, 5]));

// 8. Средний балл
function averageGrade(grades) {
    let sum = grades.reduce((a, b) => a + b, 0);
    return grades.length ? sum / grades.length : 0;
}
console.log("8.", averageGrade([4, 5, 3, 5]));

// 9. Транслитерация
function transliterate(text) {
    const letters = {
        а:"a", б:"b", в:"v", г:"g", д:"d", е:"e",
        ё:"yo", ж:"zh", з:"z", и:"i", й:"y", к:"k",
        л:"l", м:"m", н:"n", о:"o", п:"p", р:"r",
        с:"s", т:"t", у:"u", ф:"f", х:"kh", ц:"ts",
        ч:"ch", ш:"sh", щ:"shch", ы:"y", э:"e",
        ю:"yu", я:"ya", ь:"", ъ:""
    };

    return text.toLowerCase().split("").map(letter =>
        letters[letter] !== undefined ? letters[letter] : letter
    ).join("");
}
console.log("9.", transliterate("Привет, мир"));

// 10. Сокращение ФИО
function shortName(fullName) {
    let parts = fullName.split(" ");
    return parts[0] + " " +
        parts.slice(1).map(name => name[0] + ".").join("");
}
console.log("10.", shortName("Иванов Иван Иванович"));

// 11. Группировка людей по возрасту
function groupByAge(people) {
    let result = {};

    for (let person of people) {
        if (!result[person.age]) {
            result[person.age] = [];
        }
        result[person.age].push(person);
    }

    return result;
}
console.log("11.", groupByAge([
    { name: "Иван", age: 18 },
    { name: "Анна", age: 20 },
    { name: "Пётр", age: 18 }
]));

// 12. Генерация пароля
function generatePassword(length) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";

    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }

    return password;
}
console.log("12.", generatePassword(10));

// 13. Пересечение массивов
function intersection(arr1, arr2) {
    return [...new Set(arr1.filter(num => arr2.includes(num)))];
}
console.log("13.", intersection([1, 2, 3, 4], [3, 4, 5, 6]));