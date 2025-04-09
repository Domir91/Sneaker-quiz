document.addEventListener("DOMContentLoaded", () => {
    const homepage = document.getElementById("homepage");
    const quizSection = document.getElementById("quiz-section");
    const startBtn = document.querySelector(".start-btn");
    const quizContainer = document.querySelector(".quiz");

    // Spustit animaci a přechod na kvíz
    if (startBtn) {
        startBtn.addEventListener("click", function (event) {
            event.preventDefault();

            // Fade out efekt homepage
            document.body.style.animation = 'fadeOutBody 1s forwards';

            // Po animaci přepneme z homepage na kvíz
            setTimeout(() => {
                homepage.style.display = "none";
                document.getElementById("quiz").style.display = "block";
                quizSection.style.display = "block";
                document.body.style.animation = 'fadeInBody 1s forwards';
                generateQuiz(); // vygeneruj otázky
            }, 1000);            
        });
    }

    function generateQuiz() {
        const questions = {
            1: { text: "Jaké boty preferujete?", a: "Nike SB Dunk Low Black Aluminum", b: "Nike SB Dunk High Tiffany Diamond", c: "Nike SB Dunk High Soulland FRI.day Part 02" },
            2: { text: "Které boty byste si vybrali na běhání?", a: "adidas Yeezy 500 Bone White", b: "adidas Yeezy Boost 700 Wave Runner", c: "adidas Yeezy Boost 350 V2 Onyx" },
            3: { text: "Které boty jsou podle vás stylovější?", a: "Jordan 1 Retro Low OG Travis Scott Reverse Mocha", b: "Jordan 1 Retro High OG Fragment x Travis Scott", c: "Jordan 1 Retro Travis Scott Mocha" }
            // můžeš pokračovat dál...
        };

        for (let i = 1; i <= Object.keys(questions).length; i++) {
            let q = questions[i];

            let questionHTML = `
                <div class="question" id="question-${i}">
                    <div class="question-header">
                        <span class="question-number">${i}.</span>
                        <h2>${q.text}</h2>
                    </div>
                    <div class="question-content">
                        <div class="image-container">
                            <img src="img/${i}.jpg" alt="Boty ${i}" class="quiz-image">
                        </div>
                        <div class="options">
                            <label>
                                <input type="radio" name="q${i}" value="a"> ${q.a}
                            </label>
                            <label>
                                <input type="radio" name="q${i}" value="b"> ${q.b}
                            </label>
                            <label>
                                <input type="radio" name="q${i}" value="c"> ${q.c}
                            </label>
                        </div>
                    </div>
                </div>
            `;

            quizContainer.innerHTML += questionHTML;
        }

        quizContainer.innerHTML += `
            <button class="submit-btn" type="submit">Odeslat odpovědi</button>
        `;

        // Aktivace výběru odpovědí
        activateOptionSelection();
    }

    function activateOptionSelection() {
        const questions = document.querySelectorAll('.question');

        questions.forEach(question => {
            const labels = question.querySelectorAll('.options label');

            labels.forEach(label => {
                label.addEventListener('click', function () {
                    labels.forEach(l => l.classList.remove('selected'));
                    this.classList.add('selected');
                });
            });
        });
    }
});