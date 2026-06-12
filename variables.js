const Personname = "PPP";
let age = 20;
const city = "XYZ ON EARTH";
const  hobbies = "PAINTING";



document.getElementById("Personname").innerText = Personname;
document.getElementById("age").innerText = age;
document.getElementById("city").innerText = city;
document.getElementById("hobbies").innerText = hobbies;


function increaseAge(){
    age = age + 1;
    document.getElementById("age").innerText = age;
}