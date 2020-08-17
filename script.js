const quadrado = document.querySelectorAll('.quadrado');

quadrado.forEach(function (current, index, list) {
    list[index].addEventListener('mouseover', function () {
        this.classList.toggle('vermelho');
        this.classList.toggle('azul');
    })
})




/* quadrado.addEventListener('click', function () {
    this.classList().addClass('vermelho');
}) */