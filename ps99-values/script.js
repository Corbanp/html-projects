document.addEventListener('DOMContentLoaded', function() {
    let petsData;

    fetch('pets.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            const headers = rows[0].split(',');

            petsData = rows.slice(1).map(row => {
                const values = row.split(',');
                return headers.reduce((obj, header, index) => {
                    obj[header] = values[index];
                    return obj;
                }, {});
            });

            // Call the function to display pets when the page loads
            displayPets();
        });

    function displayPets() {
        const petContainer = document.getElementById('petContainer');

        if (!petContainer) {
            console.error("Element with ID 'petContainer' not found.");
            return;
        }

        petsData.forEach(pet => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <img src="${pet.ImageURL}" alt="${pet.Name}" class="card-image">
                <div class="card-info">
                    <h3>${pet.Name}</h3>
                    <p>Gem Value: ${pet.GemValue}</p>
                </div>
            `;

            petContainer.appendChild(card);
        });
    }
});
