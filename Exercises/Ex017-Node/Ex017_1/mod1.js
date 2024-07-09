const name_ = 'Luiz';
const lastname = 'Miranda';

const tellName = () => name_ + ' ' + lastname;

// module.exports.name_ = name_;
// module.exports.lastname = lastname;
// module.exports.tellName = tellName;

exports.NAME = name_;
exports.lastname = lastname;
exports.tellName = tellName;
this.something = 'Something else';

// ------------------------------------------------

class Person {
    constructor(name) {
        this.name = name;
    }
}
exports.Person = Person;