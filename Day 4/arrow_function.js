// Arrow function with parameter
const test = (x,y,z) => {
    console.log(x+y+z)
}
test(4,5,6)

const test1 = (x,y,z=4) => {
    console.log(x+y+z)
}
test1(4,5)


// Arrow function without parameter
const message = () => {
    console.log("Welcome")
}
message()


const Person = (firstName, lastName) => ({
    first: firstName,
    last: lastName
});
console.log(Person("Akshat","Sharma"))
