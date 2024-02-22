/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
async function displayTemples(temples) {
    temples.forEach(temple => {
        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const url = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";

async function getTemples(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            templeList = data;
            displayTemples(data);
        } else {
            console.error('Error fetching temples:', response.statusText);
        }
    } catch (error) {
        console.error('Error fetching temples:', error);
    }
}

/* reset Function */
function reset() {
    templesElement.innerHTML = '';
}

/* sortBy Function */
const sortBy = (temples, sortByOption) => {
    reset();
    let filteredTemples;

    switch (sortByOption) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
            
        case 'older':
            const olderTemples = temples.filter(temple => {
            const dedicatedDateArray = temple.dedicated.split(', ');
            const dedicatedDate = new Date(`${dedicatedDateArray[0]} ${dedicatedDateArray[1]}, ${dedicatedDateArray[2]}`);
            const comparisonDate = new Date(1950, 0, 1);
            return dedicatedDate < comparisonDate;
            });
            displayTemples(olderTemples);
            break;
            
        case 'all':
            displayTemples(temples);
            break;
        default:
            displayTemples(temples);
            break;
    }

    displayTemples(filteredTemples);
};

/* Event Listener */
document.getElementById('filtered').addEventListener('change', () => {
    const sortByOption = document.getElementById('filtered').value;
    sortBy(templeList, sortByOption);
});

getTemples(url);
