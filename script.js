const createTask = () => {
    let boardBox = document.querySelector("#backlog .board-box");
    let originalText = boardBox.innerHTML;
    originalText += `
    <div class="task">
        <div class="task-header">
            <button><b>Left</b></button>
            <h3>Finish This</h3>
            <button><b>Right</b></button>
        </div>
    </div>
`
    boardBox.innerHTML = originalText;
}