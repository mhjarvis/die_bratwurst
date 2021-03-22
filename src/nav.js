const nav = () => {

    const arr = ["Home", "Menu", "Contact"];        //menu items
    const header = document.getElementById('header');
    const list = document.createElement('ul');

    list.id = 'nav';
    header.appendChild(list);

    for(let i = 0; i < arr.length; i++) {
        const nav = document.getElementById('nav');
        const li = document.createElement('li');
        let item = arr[i];
        li.id = item.toLowerCase();
        li.className = "list-class";
        li.innerText = arr[i];
        nav.appendChild(li);
    };
};

export { nav }