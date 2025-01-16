function createUserProfile(username, age = 25, country = "Unknown") {
    return {
        username: username,
        age: age,
        country: country,
    };
}

const userProfile1 = createUserProfile("Akshat");
const userProfile2 = createUserProfile("Akshat", 21, "India");

console.log(userProfile1);
console.log(userProfile2); 
