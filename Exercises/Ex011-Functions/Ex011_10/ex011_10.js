// IIFE --> Immediately invoked function expression

(function() {

})();

// ------------------------------------------------

(function(age, weight, height) {
    const last_name = 'Moreira';

    function CreateName(name) {
        return name + ' ' + last_name;
    }
    function SayName() {
        console.log(CreateName('Luiz'));
    }
    SayName();
    console.log(age, weight, height);
})(30, 80, 1.87);

// ------------------------------------------------
