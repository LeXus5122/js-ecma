// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

document.getElementById("button-task-1").addEventListener("click", function () {
    const parentElement = this.closest(".task-box");
    const resultElement = parentElement.querySelector(".result");
    resultElement.textContent = "";
    // START task

    const arr = [1, 5, 7, 9];
    const result = Math.min(...arr);

    // END task
    resultElement.innerHTML += `function = Math.min(...arr);` + `<br>`;
    resultElement.innerHTML += `result = ${result}` + `<br>`;
});

