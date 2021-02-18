let selection = document.getElementsByClassName('select');

for (let i = 0; i < selection.length; i++) {
    selection[i].addEventListener('click', e => {
        e.preventDefault();
        let content = e.target.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
};