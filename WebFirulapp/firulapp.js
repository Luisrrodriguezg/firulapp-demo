document.getElementById("photoInput").addEventListener("change", function(event) {
    const photosContainer = document.getElementById("photos");
    const file = event.target.files[0];

    if (file) {
        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        photosContainer.appendChild(image);
    }
});

// Open the questionnaire as a pop-up alert
document.getElementById("openQuestionnaire").addEventListener("click", function() {
    const trimDate = prompt("When is the next trim due?");
    const vaccinesDate = prompt("Next vaccine appointment:");
    const medicalAppointmentDate = prompt("Next routine medical appointment:");
    const dewormerDate = prompt("Next dewormer date:");

    // Display the answers on the website
    const reminderQuestionnaire = document.getElementById("reminderQuestionnaire");
    reminderQuestionnaire.innerHTML = `
        <h2>Reminder Questionnaire</h2>
        <p>Next trim due: ${trimDate}</p>
        <p>Next vaccine appointment: ${vaccinesDate}</p>
        <p>Next routine medical appointment: ${medicalAppointmentDate}</p>
        <p>Next dewormer date: ${dewormerDate}</p>
    `;
});
