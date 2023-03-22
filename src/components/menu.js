const menu = () => {
    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    
    const div = document.createElement('div');
    div.textContent = 'Hello im menu'
    main.appendChild(div);

    return main;
}

export default menu;