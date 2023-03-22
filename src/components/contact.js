const contact = () => {
    const main = document.createElement('main');
    main.setAttribute('id', 'main');
    
    const div = document.createElement('div');
    div.textContent = 'Hello im contact'
    main.appendChild(div);

    return main;
}

export default contact;