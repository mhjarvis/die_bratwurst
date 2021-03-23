const home = () => {
    const div = document.createElement('div');
    const box = document.createElement('div');
    const paragraph = document.createElement('p');
    const yellow = document.getElementById('yellow-block');
    const footer = document.getElementById('footer');

    div.id = "container";
    yellow.parentNode.insertBefore(div, yellow.nextSibling);

    box.id = "container-box";
    const getContainer = document.getElementById('container');
    getContainer.appendChild(box);

    //content.append(div);

    const getContainerBox = document.getElementById('container-box');
    paragraph.id = "paragraph-header";
    paragraph.innerText = "The best Bratwurst on this side of the Planet!";
    getContainerBox.appendChild(paragraph);

    const img = document.createElement('img');
    img.id = "hello-image";
    img.src = 'images/brat-cartoon.jpg';
    getContainerBox.appendChild(img);
}

export { home }