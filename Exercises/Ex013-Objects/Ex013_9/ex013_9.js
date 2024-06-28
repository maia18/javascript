function ValideCPF(cpfenvied) {
    Object.defineProperty(this, 'CPFcleared', {
        get: function() {
            return cpfenvied.replace(/\D+/g, '');
        }
    });
}

ValideCPF.prototype.valide = function() {
    if (typeof this.CPFcleared === 'undefined') return false;
    if (this.CPFcleared.length !== 11) return false;
    if (this.isSequence()) return false; 

    const partialCpf = this.CPFcleared.slice(0, -2);
    const digit1 = this.createDigit(partialCpf);
    const digit2 = this.createDigit(partialCpf + digit1);
    const newCPF = partialCpf + digit1 + digit2;

    return newCPF === this.CPFcleared;
};

ValideCPF.prototype.createDigit = function(partialCpf) {
    const cpfArray = Array.from(partialCpf);
    let regressive = cpfArray.length + 1;
    const tot = cpfArray.reduce((ac, value) => {
        ac += (regressive * Number(value));
        regressive--;
        return ac;
    }, 0);
    const digit = 11 - (tot % 11);
    return digit > 9 ? '0' : String(digit);
}

ValideCPF.prototype.isSequence = function() {
    const sequence =  this.CPFcleared[0].repeat(this.CPFcleared.length);
    return sequence === this.CPFcleared;
}

const cpf = new ValideCPF('705.484.450-52');

if (cpf.valide()) {
    console.log('CPF valided!');
} else {
    console.log('CPF invalided!');
}