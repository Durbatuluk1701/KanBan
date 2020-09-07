const createTask = () => {
    let boardBox = document.querySelector("#backlog .board-box");
    let originalText = boardBox.innerHTML;
    originalText += `
    <div class="task">
        <div class="task-header">
            <button><b>Left</b></button>
            <h3>Finish This</h3>
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
    let nextColumn = rightColumns[currentBox];
    let currentBoxElem = document.querySelector('#' + currentBox + ' .board-box');
    let currentBoxHtml = currentBoxElem.innerHTML;
    currentBoxElem.innerHTML = currentBoxHtml.replace(task, "");;
    let nextBoxElem = document.querySelector('#' + nextColumn + ' .board-box');
    let nextBoxHtml = nextBoxElem.innerHTML;
    if (!nextBoxHtml) {
        nextBoxElem.innerHTML = task;
    }
    console.log(nextBoxHtml);

    console.log(nextColumn);
    console.log(task);
}