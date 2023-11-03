// Constructor for pet's age and weight
function petsProperties(ageInMonths, weight) {
    this.ageInMonths = ageInMonths;
    this.weight = weight;

    this.nextVaccine = function () {
        if (this.ageInMonths < 2) {
            return "For puppies under 2 months, consider the first vaccine at 6-8 weeks.";
        } else if (this.ageInMonths >= 2 && this.ageInMonths < 4) {
            return "For puppies between 2 and 4 months, the second vaccine is recommended at 2-3 months.";
        } else if (this.ageInMonths >= 4 && this.ageInMonths < 6) {
            return "For puppies between 4 and 6 months, the third vaccine is recommended at 4-6 months.";
        } else {
            return "For adult dogs over 6 months, continue with annual core vaccine boosters.";
        }
    };

    this.nextDeworm = function () {
        if (this.ageInMonths < 3) {
            return "For puppies under 3 months, deworm every 2 weeks until 3 months of age.";
        } else {
            return "For adult dogs over 3 months, deworm every 3-6 months.";
        }
    };
}

document.getElementById("photoInput").addEventListener("change", function(event) {
    const photosContainer = document.getElementById("photos");
    const file = event.target.files[0];

    if (file) {
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        photosContainer.appendChild(image);
    }
    });

document.getElementById("openQuestionnaire").addEventListener("click", function() {
    const age = parseInt(prompt("What's the dog age (months)?"));
    const weight = parseFloat(prompt("What's its weight?"));

    const pet1 = new petsProperties(age, weight);
    const dewormRecommendation = pet1.nextDeworm();
    const vaccineRecommendation = pet1.nextVaccine();

    const reminderQuestionnaire = document.getElementById("reminderQuestionnaire");
    reminderQuestionnaire.innerHTML = `
        <h2>Reminder Questionnaire</h2>
        <p>Age: ${age} months</p>
        <p>Current weight: ${weight} lbs</p>
        <p>Next dewormer recommendation: ${dewormRecommendation}</p>
        <p>Next vaccine recommendation: ${vaccineRecommendation}</p>
    `;
    const coreVaccinations = document.createElement("div");
    coreVaccinations.innerHTML = `
        <h2>Core Vaccinations</h2>
        <p>Core vaccinations are essential for every dog's health:</p>
        <ul>
            <li>Rabies</li>
            <li>Distemper</li>
            <li>Hepatitis</li>
            <li>Parvovirus</li>
        </ul>
    `;

    // Append the core vaccinations information to the page
    document.body.appendChild(coreVaccinations);

});
