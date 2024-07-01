class ValideForms {
    constructor() {
        this.form = document.querySelector('.form_');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const valideFields = this.fieldsIsValids();
        const validepasswords = this.passwordsIsValids();
        if (valideFields && validepasswords) {
            alert('Form envied');
            this.form.submit();
        }
    }
    passwordsIsValids() {
        let valid = true;
        const password = this.form.querySelector('.password');
        const repeat_password = this.form.querySelector('.repeat-password');
        if (password.value !== repeat_password.value) {
            valid = false;
            this.createError(password, 'Passwords must be the same.');
            this.createError(repeat_password, 'Passwords must be the same.');
        }
        if (password.value.length < 6 || password.value.length > 12) {
            valid = false;
            this.createError(password, 'Password must have between 6 and 12 characters.')
        }

        return valid;
    }
    fieldsIsValids() {
        let valid = true;

        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let field of this.form.querySelectorAll('.validate')) {
            const label = field.previousElementSibling.innerText;
            if (!field.value) {
                this.createError(field, `"${label}" field cannot be empty`);
                valid = false;
            }
            if (field.classList.contains('cpf')) {
                if (!this.valideCPF(field)) valid = false; 
            }
            if (field.classList.contains('user')) {
                if (!this.valideUSER(field)) valid = false; 
            }
        }
        return valid;
    }
    valideUSER(field) {
        const user = field.value;
        let valid = true;
        if (user.length < 3 || user.length > 12) {
            this.createError(field, 'The User should only have between 3 and 12 characters');
            valid = false;
        }
        if (!user.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, 'The user can only have letters and/or numbers');
            valid = false;
        }
        return true;
    }
    valideCPF(field) {
        const cpf = new ValideCPF(field.value);
        if (!cpf.valide()) {
            this.createError(field, 'Invalid cpf.');
            return false;
        }
        return true;
    }
    createError(field_, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        field_.insertAdjacentElement('afterend', div);
    }
}

const valide = new ValideForms();