class ValideCPF {
    constructor(enviedCPF) {
        Object.defineProperty(this, 'clearedCPF', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: enviedCPF.replace(/\D+/g, '')
        });
    }
    valide() {
        if (!this.clearedCPF) return false;
        
        return 'Hi';
    }
}

const valideCpf = new ValideCPF('070.987.720-03');
console.log(valideCpf.valide())