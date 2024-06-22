// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

document.getElementById("button-task-2").addEventListener("click", function () {
    const parentElement = this.closest(".task-box");
    const resultElement = parentElement.querySelector(".result");
    resultElement.textContent = "";
    // START task

    // создаём функцию
    const createCounter = () => {
        // даём функции свой счётчик
        let counter = 0;

        // методы функции
        function increment() {
            counter++;
        }
        function decrement() {
            counter--;
        }
        function getValue() {
            return counter;
        }

        // возвращаем методы в виде объекта
        return {
            increment,
            decrement,
            getValue
        };
    }

    // END task

    // Создаем кнопку "Добавить счетчик"
    const addButton = document.createElement('button');
    addButton.textContent = 'Добавить счетчик';
    addButton.classList.add('button_counter');
    addButton.addEventListener('click', addCounter);
    resultElement.appendChild(addButton);

    // Массив для хранения счетчиков (в целом для примера не требуется)
    const counters = [];

    // Функция для добавления счетчика
    function addCounter() {
        // Создаем счетчик с помощью функции createCounter
        const counter = createCounter();
        counters.push(counter);

        // Создаем элемент для отображения счетчика
        const counterWrapper = document.createElement('div');
        resultElement.appendChild(counterWrapper);

        // Создаем элемент для отображения значения счетчика
        const counterValueElement = document.createElement('div');
        counterValueElement.textContent = 'Счетчик: ' + counter.getValue();
        counterWrapper.appendChild(counterValueElement);

        // Создаем кнопки для увеличения и уменьшения
        const incrementButton = document.createElement('button');
        incrementButton.textContent = 'Увеличить';
        incrementButton.classList.add('button_counter');
        incrementButton.addEventListener('click', function () {
            // Так как сейчас в переменной counter находится ссылка на новый счётчик, мы можем создавать элементы и события используя эту ссылку, которая сохраниться именно для создаваемого элемента
            counter.increment();
            counterValueElement.textContent = 'Счетчик: ' + counter.getValue();
        });
        counterWrapper.appendChild(incrementButton);

        const decrementButton = document.createElement('button');
        decrementButton.textContent = 'Уменьшить';
        decrementButton.classList.add('button_counter');
        decrementButton.addEventListener('click', function () {
            counter.decrement();
            counterValueElement.textContent = 'Счетчик: ' + counter.getValue();
        });
        counterWrapper.appendChild(decrementButton);
    }
});

