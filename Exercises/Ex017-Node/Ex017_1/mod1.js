const name_ = 'Luiz';
const lastname_ = 'Miranda';

const tellName = () => name_ + ' ' + lastname_;

// module.exports.name_ = name_;
// module.exports.lastname = lastname;
// module.exports.tellName = tellName;

exports.NAME_ = name_;
exports.lastname_ = lastname_;
exports.tellName = tellName;
this.something = 'Something else';

// ------------------------------------------------

class Person {
    constructor(name) {
        this.name = name;
    }
}

// module.exports.name = 'Luiz';
// exports.Person = Person;
// this.lastname = 'Anything that I want.';

const name = 'Luiz';
const lastname = 'Borges';

module.exports = {
    name, lastname, Person
}