/* factory function
   Contructor function */
function CreatePerson(name, last_name, h, w) {
    return {
        name,
        last_name,

        // Getter
        get FullName() {
            return `${this.name} ${this.last_name}`;
        },
        // Setter
        set FullName(value) {
            value = value.split(' ');
            this.name = value.shift();
            this.last_name = value.join(' ');
        },

        Speech(topic = 'nothing') {
            return `${this.name} is talking about the ${topic}.`;
        },
        height: h,
        weight: w,

        // Getter
        get imc() {
            const index = this.weight / (this.height ** 2);
            return index.toFixed(2);
        }
    };
}

const p1 = CreatePerson('Luiz', 'Borges', 1.88, 80);
const p2 = CreatePerson('João', 'Antunes', 1.92, 91);
const p3 = CreatePerson('Nelson', 'Lorenzo', 1.62, 58);

p1.FullName = 'Pedro Otávio Miranda'; 
p2.FullName = 'Marcos Robertson Borges';

console.log(
    '\n'+
    p1.Speech('dinner') + '\r' + 
    p1.name + '\r' +  
    p1.last_name + '\r' +  
    p1.imc + '\r' +   
    p1.FullName
);
console.log(
    '\n'+
    p2.Speech('soccer') + '\r' + 
    p2.name + '\r' + 
    p2.last_name + '\r' + 
    p2.imc + '\r' + 
    p2.FullName
);
console.log(
    '\n'+
    p3.Speech() + '\r' + 
    p3.name + '\r' + 
    p3.last_name + '\r' + 
    p3.imc + '\r' + 
    p3.FullName
);
