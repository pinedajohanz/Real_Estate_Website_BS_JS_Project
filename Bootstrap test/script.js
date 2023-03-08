// JS function for button (Find your Dream Home) Home page
function go_to_contact(link){
    location.href= link.value;
}

// >> target house page 3 html <<
// const house / ARRAY = Pics of Houses  / OBJECTS = (name of house, location, landmark, selling price)
// can use for loop? to display pics of house per col or box then under display JS OBJECTS

// house variable assigns object
// (objects are inside of an Array) 
// consist of objects (details of per house)
const house = [
    {
        src: "house/1.jpg",
        name: "Name of House: Wendy",
        location: "Location: Bulacan",
        landmark: "Landmark: Near SM Baliwag",
        price: "Asking price: PHP 3M"
    },
    {
        src: "house/2.jpg",
        name: "Name of House: Irene",
        location: "Location: Taguig",
        landmark: "Landmark: Near SM Aura",
        price: "Asking price: PHP 4M"
    },
    {
        src: "house/3.jpg",
        name: "Name of House: Joy",
        location: "Location: Batangas",
        landmark: "Landmark: Near SM Batangas",
        price: "Asking price: PHP 5M"
    },
    {
        src: "house/4.jpg",
        name: "Name of House: Yeri",
        location: "Location: Manila",
        landmark: "Landmark: Near SM Manila",
        price: "Asking price: PHP 2M"
    },
    {
        src: "house/5.png",
        name: "Name of House: Jiheon",
        location: "Location: Pasay",
        landmark: "Landmark: Near SM MOA",
        price: "Asking price: PHP 8M"
    },
    {
        src: "house/6.jpg",
        name: "Name of House: Saerom",
        location: "Location: Cavite",
        landmark: "Landmark: Near SM Dasmarinas",
        price: "Asking price: PHP 9M"
    },

]

// house_id assigns array of house pics main display page in house page html
const house_id = [
    'house1',
    'house2',
    'house3',
    'house4',
    'house5',
    'house6'
    
]
// house_big targets modal header to display pic of house inside the modal (pop up)
const house_big = [
    'house1_big',
    'house2_big',
    'house3_big',
    'house4_big',
    'house5_big',
    'house6_big'
]
// house_info targets modal body to display details of house (JS objects)
const house_info = [
    'house1_info',
    'house2_info',
    'house3_info',
    'house4_info',
    'house5_info',
    'house6_info'
]

function display() {
    for (houses = 0; houses < 6; houses++) {
        // new var (strings of id) = var [array] / loop houses per index in the array
        current_id = house_id[houses]
        current_house = house[houses]
        current_big = house_big[houses]
        current_info = house_info[houses]
        // get html id to print the image or text from JS (Location on where to display)
        new_house = document.getElementById(current_id)
        new_big = document.getElementById(current_big)
        new_info = document.getElementById(current_info)
        // .createElement - creates new html tag (img)
        new_image = document.createElement('img')
        new_image.src = current_house.src
        new_image.width = 400
        new_image.height = 300
        // add a new child element into parent element
        // this method will add the image under a parent element
        new_house.appendChild(new_image)
        // .createElement - creates new html tag (img)
        new_image_big = document.createElement('img')
        new_image_big.src = current_house.src
        new_image_big.width = 450
        new_image_big.height = 500
        new_big.appendChild(new_image_big)
        // .innerHTML replace the inside of div tag
        new_info.innerHTML = current_house.name + `<br>` + current_house.location + `<br>` + current_house.landmark + `<br>` + current_house.price 
    }

}
// calls out the event if the website loaded then execute the function display() 
window.addEventListener ('load', display) 

// const house = {
//     name: "Wendy",
//     location: "Bulacan",
//     landmark: "Near SM Baliwag",
//     price: "PHP 3M"
// }

// let display1 = 
// `<span id="house_name"> 1: ${house.name}</span>`; 
// let display2 = `<span id="house_location"> 2: ${house.location}</span>`; 
// let display3 = `<span id="house_landmark"> 3: ${house.landmark}</span>`; 
// let display4 = `<span id="house_price"> 4: ${house.price}</span>`;

// document.getElementById("house_name").innerHTML = display1;
// document.getElementById("house_location").innerHTML = display2;
// document.getElementById("house_landmark").innerHTML = display3;
// document.getElementById("house_price").innerHTML = display4;



// function validate() {
//     let name = document.getElementById("name_form");
//     let contact = document.getElementById("contact_form");
//     let email = document.getElementById("email_form");

//     if (name.value == "" || contact.value == "" || email.value == "") {
//         window.alert("No blank values allowed");
//         return false;
//     }
//     else {
//         true;
//     }
// }
// =====================================================================================
// const form = document.querySelector("form")

// form.addEventListener('submit', e => {
//     if (!form.checkValidity()) {
//         e.preventDefault()
//     }
//     form.classList.add('was-validated')
// })