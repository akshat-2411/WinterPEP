// Create a chainable object using arrow functions that allows you to set a value and then add 
// or multiply it by a number. For example:
// const result = chainable(5).add(3).multiply(2);

const chainable = (initialValue) => {
    let value = initialValue;

    return {
        add: (num) => {
            value += num;
            return this;
        },
        multiply: (num) => {
            value *= num;
            return this;
        },
        getResult: () => value
    };
};

const result = chainable(5).add(3).multiply(2).getResult();
console.log(result);
