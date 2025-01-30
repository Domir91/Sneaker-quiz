document.addEventListener('DOMContentLoaded', function () {
    // Získání všech otázek
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        const labels = question.querySelectorAll('.options label');

        labels.forEach(label => {
            label.addEventListener('click', function () {
                // Odstranění zvýraznění ze všech labelů v rámci aktuální otázky
                labels.forEach(l => l.classList.remove('selected'));

                // Přidání zvýraznění pouze pro ten, který byl vybrán
                this.classList.add('selected');
            });
        });
    });
});

// Funkce pro sledování scrollování
window.addEventListener('scroll', function() {
    const footer = document.querySelector('footer');
    // Pokud je stránka posunutá více než 500px (nebo podle potřeby změnit)
    if (window.scrollY > 500) {
        footer.style.opacity = '1'; // Zobrazí patičku
    } else {
        footer.style.opacity = '0'; // Skryje patičku
    }
});
