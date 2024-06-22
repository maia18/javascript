function CreateCalculator() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.clickButtons();
        },
        clickButtons() {
            // this --> calculator
            document.addEventListener('click', function(event) {
                const el = event.target;

                if (el.classList.contains('btn-num')) {
                    this.btnForDisplay();
                }
            }.bind(this));
        },
        btnForDisplay() {
            this
        }
    };
}

const calculator = CreateCalculator();
calculator.start();