let bodyMouse = document.getElementsByTagName("body")[0];

bodyMouse.addEventListener('click', function handleClick(event) {
    event.target.remove();
});