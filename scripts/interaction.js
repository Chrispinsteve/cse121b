// scripts/interaction.js

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter_buttons button');
    const cards = document.querySelectorAll('.filterable_cards .card');

    // Add event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const filterName = this.getAttribute('data-name');

            // Remove 'active' class from all buttons
            filterButtons.forEach(button => {
                button.classList.remove('active');
            });

            // Add 'active' class to the clicked button
            this.classList.add('active');

            // Filter cards based on the data-name attribute
            cards.forEach(card => {
                const cardDataName = card.getAttribute('data-name');

                if (filterName === 'all' || filterName === cardDataName) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });

            // Fetch images and information from NASA API when 'NASA' button is clicked
            if (filterName === 'nasa') {
                fetchNASAData();
            }
        });
    });

    // Function to fetch images and information from NASA API
    function fetchNASAData() {
        const apiKey = '6xSh2CpGZTbbehJvt8rFAGCBUSovAZmkymirNyZz';
        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=5`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                // Display fetched images and information
                displayNASAData(data);
            })
            .catch(error => console.log('Error fetching NASA data:', error));
    }

    // Function to display images and information from NASA API
    function displayNASAData(data) {
        // Clear previous content
        const nasaContainer = document.querySelector('.nasa-container');
        nasaContainer.innerHTML = '';

        data.forEach(item => {
            const nasaItem = document.createElement('div');
            nasaItem.classList.add('nasa-item');

            const img = document.createElement('img');
            img.src = item.url;
            img.alt = item.title;

            const title = document.createElement('h3');
            title.textContent = item.title;

            const explanation = document.createElement('p');
            explanation.textContent = item.explanation;

            nasaItem.appendChild(img);
            nasaItem.appendChild(title);
            nasaItem.appendChild(explanation);

            nasaContainer.appendChild(nasaItem);
        });
    }
});

