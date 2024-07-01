class ValideCPF {
    constructor(enviedCPF) {
        Object.defineProperty(this, 'clearedCPF', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: enviedCPF.replace(/\D+/g, '')
        });
    }
    isSequence() {
        return this.clearedCPF.charAt(0).repeat(11) === this.clearedCPF;
    }
    generateNewcpf() {
        const cpfWithoutDigit = this.clearedCPF.slice(0, -2);
        const digit1 = this.generateDigit(cpfWithoutDigit);
        const digit2 = this.generateDigit(cpfWithoutDigit + digit1);
        this.newCPF = cpfWithoutDigit + digit1 + digit2;
    }
    generateDigit(cpfWithoutDigit) {
        let tot = 0;
        let reverse = cpfWithoutDigit.length + 1;
        for (let stringNumeric of cpfWithoutDigit) {
            // console.log(stringNumeric, reverse);
            tot += reverse * Number(stringNumeric);
            reverse--;
        }
        const digit = 11 - (tot % 11);
        return digit <= 9 ? String(digit) : '0';
    }
    valide() {
        if (!this.clearedCPF) return false;
        if (typeof this.clearedCPF !== 'string') return false;
        if (this.clearedCPF.length !== 11) return false;
        if (this.isSequence()) return false;
        if (this.generateNewcpf()) return false;
        console.log(this.newCPF);
        
        return this.newCPF === this.clearedCPF;
    }
}

// let valideCpf = new ValideCPF('070.987.720-03');

// if (valideCpf.valide()) {
//     console.log('Cpf valide.');
// } else {
//     console.log('Cpf invalid.');
