const menu = () => {

    const div = document.createElement('div');
    const box = document.createElement('div');
    const h2 = document.createElement('h2');
    const paragraph = document.createElement('p');
    const yellow = document.getElementById('yellow-block');

    div.id = "container";
    yellow.parentNode.insertBefore(div, yellow.nextSibling);

    box.id = "container-box";
    const getContainer = document.getElementById('container');
    getContainer.appendChild(box);

    const getContainerBox = document.getElementById('container-box');
    h2.id = "menu-page";
    h2.innerHTML = "Menu"
    getContainerBox.appendChild(h2);
    paragraph.id = "paragraph-header";
    paragraph.innerText = "Schnitzel mit Pommes ~14\n\nZwiebelschnitzel ~16\n\nJagerschnitzel ~16\n\n Bratwurst mit Kraut ~10\n\n Sauerbraten ~19\n\n Schnitzel Burger ~11\n\n Chicken Burger ~11";
    getContainerBox.appendChild(paragraph);
}

export { menu }