const createTask = () => {
    let boardBox = document.querySelector("#backlog .board-box");
    let originalText = boardBox.innerHTML;
    originalText += `
    <div class="task">
        <div class="task-header">
            <button onclick="moveLeft(this)"><b>Left</b></button>
            <input type="textbox" onblur="blurredField(this)"></input>
            <button onclick="moveRight(this)"><b>Right</b></button>
        </div>
    </div>
`
    boardBox.innerHTML = originalText;
}

const leftColumns = {
    dev: "backlog",
    progress: "dev",
    test: "progress",
    complete: "test"
}

const rightColumns = {
    backlog: "dev",
    dev: "progress",
    progress: "test",
    test: "complete"
}

const moveRight = (buttonName) => {
    let currentBox = buttonName.parentElement.parentElement.parentElement.parentElement.id;
    let task = buttonName.parentElement.parentElement.outerHTML;
    if (currentBox === "complete") {
        console.warn("Not Possible");
        return;
    }
    let currentBoxElem = document.querySelector('#' + currentBox + ' .board-box');
    let currentBoxHtml = currentBoxElem.innerHTML;
    currentBoxElem.innerHTML = currentBoxHtml.replace(task, "");;
    appendTaskHtml(rightColumns[currentBox], task);
}

const appendTaskHtml = (nextColumn, taskHtml) => {
    let taskBoard = document.querySelector('#' + nextColumn + " .board-box");
    taskBoard.innerHTML = taskHtml += taskBoard.innerHTML;
}

const moveLeft = (buttonName) => {
    let currentBox = buttonName.parentElement.parentElement.parentElement.parentElement.id;
    let task = buttonName.parentElement.parentElement.outerHTML;
    if (currentBox === "backlog") {
        console.warn("Not Possible");
        return;
    }
    let currentBoxElem = document.querySelector('#' + currentBox + ' .board-box');
    let currentBoxHtml = currentBoxElem.innerHTML;
    currentBoxElem.innerHTML = currentBoxHtml.replace(task, "");;
    appendTaskHtml(leftColumns[currentBox], task);
}

const blurredField = (input) => {
    let inputValue = input.value;
    input.outerHTML = `<h3>${inputValue}</h3>`;
}