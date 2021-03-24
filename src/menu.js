const menu = () => {

    const div = document.createElement('div');
    const box = document.createElement('div');
    const yellow = document.getElementById('yellow-block');

    div.id = "container";
    yellow.parentNode.insertBefore(div, yellow.nextSibling);

    box.id = "container-box";
    const getContainer = document.getElementById('container');
    getContainer.appendChild(box);










    // const box = document.createElement('div');
    // const h2 = document.createElement('h2');
    // const paragraph = document.createElement('p');
    // const yellow = document.getElementById('yellow-block');

    // box.id = "container-box";
    // const getContainer = document.getElementById('container');
    // getContainer.appendChild(box);

    // const getContainerBox = document.getElementById('container-box');
    // h2.id = "contact-page";
    // h2.innerHTML = "Contact Us"
    // getContainerBox.appendChild(h2);
    // paragraph.id = "paragraph-header";
    // paragraph.innerText = "Phone\n555.555.5435\n\nEmail\ndiebratwurst@gmail.com";
    // getContainerBox.appendChild(paragraph);




}

export { menu }