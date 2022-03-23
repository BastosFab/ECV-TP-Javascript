let bodyMouse = document.getElementsByTagName("body")[0];

bodyMouse.addEventListener('mouseover', function (element) {
    element.target.style.color = 'red';
});

bodyMouse.addEventListener('mouseout', function (element) {
    element.target.style.color = 'unset';
});