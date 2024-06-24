function CreateCalculator() {
    return {
        display: document.querySelector('.display'),
        // btnClear: document.querySelector('.btn-clear'),
        start() {
            this.clickButtons();
            this.pressEnter();
        },
        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.PerformsCalculation();
                }
            });
        },
        clearDisplay() {
            this.display.value = '';
        },
        DelOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        PerformsCalculation() {
            let count = this.display.value;
            try {
                count = eval(count);
                if (!count) {
                    alert('Invalid count');
                    return;
                }
                this.display.value = String(count);
            } catch(e) {
                alert('Invalid count');
                return;
            }
        },
        clickButtons() {
            // this --> calculator
            document.addEventListener('click', event => {
                const el = event.target;

                if (el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.DelOne();
                }
                if (el.classList.contains('btn-eq')) {
                    this.PerformsCalculation();
                }
            });
        },
        btnForDisplay(value) {
            this.display.value += value;
        }
    };
}

const calculator = CreateCalculator();
calculator.start();