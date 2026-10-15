const axios = require("axios");
const url = "https://jsonplaceholder.typicode.com";

// 1. Получить пользователей
async function task1() {
    const res = await axios.get(url + "/users");
    console.log("1.", res.data);
}

// 2. Обработка ошибок
async function task2() {
    try {
        const res = await axios.get(url + "/users");
        console.log("2.", res.data);
    } catch (err) {
        console.log("Ошибка!");
    }
}

// 3. POST-запрос
async function task3() {
    const res = await axios.post(url + "/posts", {
        title: "Привет",
        body: "Текст",
        userId: 1
    });
    console.log("3.", res.data);
}

// 4. Параллельные запросы
async function task4() {
    const res = await Promise.all([
        axios.get(url + "/users"),
        axios.get(url + "/posts")
    ]);
    console.log("4.", res[0].data);
    console.log(res[1].data);
}

// 5. Пять запросов, некоторые могут завершиться ошибкой
async function task5() {
    const urls = [
        url + "/users",
        url + "/posts",
        url + "/comments",
        url + "/albums",
        url + "/wrong"
    ];

    const res = await Promise.allSettled(
        urls.map(link => axios.get(link))
    );

    console.log("5.", res);
}

// 6. Таймаут
async function task6(link, ms) {
    const controller = new AbortController();

    const timer = setTimeout(() => controller.abort(), ms);

    try {
        const res = await axios.get(link, {
            signal: controller.signal
        });
        console.log("6.", res.data);
    } catch (err) {
        console.log("6. Ошибка или таймаут");
    } finally {
        clearTimeout(timer);
    }
}

// 7. Повторить запрос при ошибке
async function task7() {
    for (let i = 0; i < 3; i++) {
        try {
            const res = await axios.get(url + "/users");
            console.log("7.", res.data);
            return;
        } catch (err) {
            console.log("Повтор запроса...");
        }
    }
}

// 8. CRUD — работа с задачами
async function task8() {
    const list = await axios.get(url + "/todos");
    console.log("Задачи:", list.data.slice(0, 3));

    const add = await axios.post(url + "/todos", {
        title: "Учить JS",
        completed: false,
        userId: 1
    });
    console.log("Добавлено:", add.data);

    const edit = await axios.put(url + "/todos/1", {
        title: "Учить Axios",
        completed: true,
        userId: 1
    });
    console.log("Изменено:", edit.data);

    const del = await axios.delete(url + "/todos/1");
    console.log("Удалено:", del.status);
}

// 9. Проверить соединение
async function task9() {
    try {
        await axios.get(url + "/users");
        console.log("9. Соединение работает");
    } catch (err) {
        console.log("9. Нет соединения или ошибка сервера");
    }
}

// Запуск заданий
async function main() {
    await task1();
    await task2();
    await task3();
    await task4();
    await task5();
    await task6(url + "/posts", 3000);
    await task7();
    await task8();
    await task9();
}

main();