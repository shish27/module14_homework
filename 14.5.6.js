const usePromise = new Promise((resolve, reject) => {
    setTimeout (function() {
        const randomNum = Math.floor(Math.random() * 100);
        if (randomNum % 2 == 0){
            resolve(randomNum);
        } else {
            reject(randomNum);
        };
    },3000);
});
usePromise
.then((value) => {
    console.log("Завершено успешно. Сгенерированное число - " + value);
});
.catch((error) => {
    console.log("Завершено с ошибкой. Сгенерированное число - " + error);
});