const header = () => {

    const content = document.getElementById('content');
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const redBlock = document.createElement('div');
    const yellowBlock = document.createElement('div');

    div.id = "header";
    content.appendChild(div);

    h1.id = "title";
    h1.title = "Die Bratwurst";
    h1.innerText = "Die Bratwurst";
    content.appendChild(h1);

    redBlock.id = "red-block";
    content.appendChild(redBlock);
    yellowBlock.id = "yellow-block";
    content.appendChild(yellowBlock)


    console.log("Header Function");
}

export { header }