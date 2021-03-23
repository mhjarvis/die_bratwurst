const nav = () => {

    const arr = ["Home", "Menu", "Contact"];        //menu items
    const header = document.getElementById('header');
    const list = document.createElement('ul');

    list.id = 'nav';
    header.appendChild(list);

    for(let i = 0; i < arr.length; i++) {
        const nav = document.getElementById('nav');
        const li = document.createElement('li');
        const a = document.createElement('a');
        let item = arr[i];
        li.id = item.toLowerCase();
        li.className = "list-class";
        //li.innerText = arr[i];
        //li.setAttribute('href', ('./' + li.id + '.js'));
        nav.appendChild(li);
        const getListElement = document.getElementById(li.id);
        a.href = './home';
        a.innerHTML = arr[i];
        getListElement.appendChild(a);

    };
};

export { nav }