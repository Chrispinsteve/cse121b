/* LESSON 3 - Programming Tasks */
let photoElement = document.getElementById('photo');

/* Profile Object  */
let myProfile = {
    name : 'Steve Chrispin',
    photo : {
        src: 'images/invincible.jpg',
        alt: 'Profile Picture'
    },

    favoriteFoods: [
        ' Steak',
        ' Chocolate',
        ' Rice',
        ' Banana',
        ' Greek Salad'
    ],

    hobbies: [
        'Playing Chess',
        'Meditation',
        'Music',
        'Check News',
        'Learning new languages',
        'Film',
        'Books',
        'Writing'
    ],

    placesLived: []
}; 

/* Populate Profile Object with placesLived objects */
myProfile.placesLived.push(
    {
        place: 'Port-au-Prince, Haiti',
        length: '22 years'
    }
);

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
photoElement.src = myProfile.photo.src;
photoElement.alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item => {
    let li = document.createElement("li"); // Fix: Use "li" instead of "#li"
    li.textContent =  item;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(item => {
    let li = document.createElement("li");
    li.textContent =  item;
    document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");

    dt.textContent = place.place;
    dd.textContent = place.length;

    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});
