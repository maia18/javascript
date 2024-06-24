function Calculator() {
    this.display = document.querySelector('.display');
    this.CatchClicks = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.AddNumber(el);
            if (el.classList.contains('btn-clear')) this.Clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.PerformsCalc();
        });
    };
    this.PerformsCalc = () => {
        try {
            const count = eval(this.display.value);
            if (!count) {
                alert('Invalid count...');
                return;
            }
            this.display.value = count;
        } catch(e) {
            alert('Invalid count...');
            return;
        }
    };
    this.AddNumber = element => {
        this.display.value += element.innerText;
        this.display.focus();
    };
    this.Clear = () => this.display.value = '';
    this.Start = () => {
        this.CatchClicks();
        this.CatchEnter();
    };
    this.CatchEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode === 13 ) {
                this.PerformsCalc();
            }
        });
    }
    this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculator = new Calculator();
calculator.Start();