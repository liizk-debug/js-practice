const crypto = require("crypto");

// 1. Сортировка массива
function sortNumbers(arr, up) {
    return arr.sort((a, b) => up ? a - b : b - a);
}

console.log("1.", sortNumbers([5, 2, 8, 1], true));
console.log(sortNumbers([5, 2, 8, 1], false));

// 2. Заполнение массива
function fillArray(size, value) {
    return Array(size).fill(value);
}

console.log("2.", fillArray(5, 7));

// 3. Сообщение о записи к врачу
function buildMessage(record) {
    return `Пациент: ${record.name}
Врач: ${record.doctor}
Дата: ${record.date}
Время: ${record.time}`;
}

console.log("3.", buildMessage({
    name: "костян",
    doctor: "Терапевт",
    date: "67.10.2026",
    time: "10:30"
}));

// 4. Хэш строки
function hashString(text) {
    return crypto.createHash("sha256").update(text).digest("hex");
}

console.log("4.", hashString("Hello"));

// 5. Создание UUID4
function createKey(auth) {
    if (auth) {
        return crypto.randomUUID();
    }
    return "Нет авторизации";
}

console.log("5.", createKey(true));

// 6. Запись ключа в cookie (имитация)
let cookie = "";

function saveCookie(key) {
    cookie = "userKey=" + key;
    return cookie;
}

console.log("6.", saveCookie(createKey(true)));

// 7. Регистрация (имитация localStorage)
let user = {};

function register(login, password) {
    user.login = login;
    user.password = password;
    return "Регистрация успешна";
}

console.log("7.", register("ivan", "12345"));

// 8. Авторизация
function loginUser(login, password) {
    if (login === user.login && password === user.password) {
        let key = createKey(true);
        saveCookie(key);
        return "Авторизация успешна";
    }
    return "Неверный логин или пароль";
}

console.log("8.", loginUser("ivan", "12345"));
console.log("Cookie:", cookie);

// 9. Переворот строки
function reverseString(text) {
    return text.split("").reverse().join("");
}

console.log("9.", reverseString("Привет"));

// 10. Проверка палиндрома
function isPalindrome(text) {
    let str = text.toLowerCase();
    return str === reverseString(str);
}

console.log("10.", isPalindrome("топот"));
console.log(isPalindrome("привет"));