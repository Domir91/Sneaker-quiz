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