let nameInput = document.getElementById("nameInput");
let cardName = document.getElementById("cardName");

nameInput.addEventListener("input" , function(){
 cardName.textContent = nameInput.value;
});

let birth = document.getElementById("birth");
let cardbirth = document.getElementById("cardbirth");

birth.addEventListener("input" , function(){
 cardbirth.textContent = birth.value;
});

let loc = document.getElementById("loc");
let cardloc= document.getElementById("cardloc");

loc.addEventListener("input" , function(){
 cardloc.textContent = loc.value;
});


// When button clicked → trigger file input click
let fileInput = document.getElementById("fileInput");

document.getElementById("uploadBtn").addEventListener("click" , function(){
 console.log("button clicked!"); // add this
    fileInput.click();
});

fileInput.addEventListener("change" , function(){
const file = this.files[0];
const reader = new FileReader();

reader.onload = function(e){
    document.getElementById("cardPhoto").src = e.target.result;
    document.getElementById("cardPhoto").style.display = "block";
    document.getElementById("photoPlaceholder").style.display = "none";
}
reader.readAsDataURL(file);
});
