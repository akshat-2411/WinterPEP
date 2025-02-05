// i am having 1 lakh rupee with me i want to fix deposit it, if there is intreset rate of 6 month is 2%,
// for 1 years 5%,for 2 years 5% and for 5 years 6%. then calculate the autual amount which i will get in all the 
// interest rate.
// there should be an onclick button after clicking on that button i should get the amount in alert box.


function calculateFD() {
    const principal = 100000;
    const interestRates = {
        "6 months": 0.02,
        "1 year": 0.05,
        "2 years": 0.05,
        "5 years": 0.06
    };

    const results = [];

    // Calculate FD amounts for each duration
    results.push(`For 6 months: ₹${(principal * (1 + interestRates["6 months"])).toFixed(2)}`);
    results.push(`For 1 year: ₹${(principal * (1 + interestRates["1 year"])).toFixed(2)}`);
    results.push(`For 2 years: ₹${(principal * Math.pow(1 + interestRates["2 years"], 2)).toFixed(2)}`);
    results.push(`For 5 years: ₹${(principal * Math.pow(1 + interestRates["5 years"], 5)).toFixed(2)}`);

    // Show the result in an alert box
    alert(results.join("\n"));
}

// Simulate an "onclick" event
document.addEventListener("DOMContentLoaded", function () {
    // Create a button
    const button = document.createElement("button");
    button.textContent = "Calculate Fixed Deposit";
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.style.cursor = "pointer";

    // Append button to the body
    document.body.appendChild(button);

    // Add event listener for button click
    button.addEventListener("click", calculateFD);
});
