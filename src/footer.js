const footer = () => {

    const div = document.createElement('div');
    const content = document.getElementById('content');
    const text = document.createElement('p');
    const img = document.createElement('img');

    div.id = "footer";
    content.appendChild(div);

    text.id = "copyright";
    text.innerHTML = "Copyright &copy; 2021 mhjarvis";
    const footer = document.getElementById('footer');
    footer.appendChild(text);

    img.id = "github-image";
    img.src = "images/github.png";
    img.onclick = () => {
        window.location.href = "https://github.com/mhjarvis";
    };
    footer.appendChild(img);
};

export { footer }