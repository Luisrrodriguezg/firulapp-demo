// Array to store pet profiles 
let petProfiles = [];

// Function to display pet profiles
function displayPetProfiles() {
    const petList = document.getElementById("petList");
    petList.innerHTML = '';

    if (petProfiles.length === 0) {
        petList.innerHTML = "<p>No pets added. Click 'Add a New Pet' to add your pets.</p>";
    } else {
        petProfiles.forEach((pet, index) => {
            const petProfile = document.createElement("article");
            petProfile.classList.add("petProfile");

            petProfile.innerHTML = `
                <h2>${pet.name}</h2>
                <p>Breed: ${pet.breed}</p>
                <button class="viewCalendarButton" data-index="${index}">View Calendar</button>
            `;

            petList.appendChild(petProfile);
        });
    }
}

// Function to handle clicking the "View Calendar" button
function handleViewCalendarClick(event) {
    if (event.target.classList.contains("viewCalendarButton")) {
        const index = event.target.getAttribute("data-index");
        if (index !== null) {
            const selectedPet = petProfiles[index];
        }
    }
}

// Function to add a new pet
function addNewPet() {
    const petName = prompt("Enter the pet's name:");
    const petBreed = prompt("Enter the pet's breed:");
    
    if (petName && petBreed) {
        petProfiles.push({ name: petName, breed: petBreed });
        displayPetProfiles();
    }
}

// Add event listener to "View Calendar" buttons
document.getElementById("petList").addEventListener("click", handleViewCalendarClick);

// Add event listener to "Add a New Pet" button
document.getElementById("addPetButton").addEventListener("click", addNewPet);

// Initial display of pet profiles
displayPetProfiles();