/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullname = "Steve Chrispin";
const  currentYear = "2024";

const profilePicture = "images/invincible.jpg"


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name')
const foodElement = document.getElementById('food')
const yearElement = document.querySelector('#year')
 
const imageElement = document.querySelector('img')


/* Step 4 - Adding Content */
yearElement.textContent = currentYear;

nameElement.innerHTML = `<strong>${fullname}</strong>`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of the Goat ${fullname} !!!`);

/* Step 5 - Array */
let favFoods = ['Bread', ' Struberries', ' Spaghetti', ' Steak',' Chocolate', ' Rice', ' Banana', ' Greek Salade', ' Roast Chicken', ' Lasagna']

foodElement.innerHTML = favFoods;
let newFood = ' Honey';
favFoods.push(newFood);
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift([0])
foodElement.innerHTML += `<br>${favFoods}`;






