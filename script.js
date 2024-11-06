// Years of Experience innerHTML //

investmentExperience.addEventListener("input", event => {
    let yearsExperience = investmentExperience.value;
    if (yearsExperience > 24) {
        yearsExperience = yearsExperience + "+";
    }
    yearsNumber.innerHTML = yearsExperience;
});

// Income Level //

incomeLevel.addEventListener("input", event => {
    let incomePerYear = incomeLevel.value;
    if (incomePerYear > 249999) {
        incomePerYear = incomePerYear + "+";
    }
    incomeNumber.innerHTML = incomePerYear
})

