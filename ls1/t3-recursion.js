// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название
// класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

document.getElementById("button-task-3").addEventListener("click", function () {
    const parentElement = this.closest(".task-box");
    const resultElement = parentElement.querySelector(".result");
    resultElement.textContent = "";
    // START task

    function findElementByClass(currentNode, wantedClass) {
        if (currentNode.classList.contains(wantedClass)) {
            // console.log("найдено");
            return currentNode;
        } // точка выхода

        const childElements = currentNode.children;

        /* по какойто причие foreEach хоть и находит элемент, но не прерывает операцию перебора на return и в результате выводит null
        Array.from(childElements).forEach(childElement => {
            const foundElement = findElementByClass(childElement, wantedClass);
            if (foundElement) {
                console.log("вывожу:" + foundElement);
                return foundElement;
            }
        });
        */

        // попробую обычный for
        for (let i = 0; i < childElements.length; i++) {
            const childElement = childElements[i];
            const foundElement = findElementByClass(childElement, wantedClass);
            if (foundElement) {
                return foundElement; // возврат найденного элемента
            }
        }

        // если элемент не найден в ветке
        return null;
    }

    const rootElement = document.getElementById('root');
    console.log(rootElement);
    const targetElement = findElementByClass(rootElement, 'my-class');
    console.log(targetElement);

    // END task
    resultElement.innerHTML += `в консоль выведен элемент: <br>` + targetElement;

});

