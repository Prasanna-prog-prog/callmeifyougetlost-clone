
let nameInput = document.getElementById("nameInput");//this is the box of name in potrait
let cardName = document.getElementById("cardName");//this is name in the card 

nameInput.addEventListener("input" , function(){//when the name iswritten by the user in the box
 cardName.textContent = nameInput.value;// using the textContent it written visible inside in name in the card.
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

const uploadBtn =  document.getElementById("uploadBtn");
const PhotoInput=document.getElementById("PhotoInput");
const previewImg = document.getElementById("previewImg");
const Placeholder = document.getElementById("Placeholder");


uploadBtn.addEventListener("click" , () =>{
    PhotoInput.click();
});
//ABOVE codes helps in if user click on UploadButton,run the PhotoInput function on click
//uploadBtn.addEventListener("click", ...) → listens for a click on your upload button.
//PhotoInput.click() → simulates a click on the hidden file input, opening the file picker.

PhotoInput.addEventListener("change" , function(){
//addEventListener("change", ...) listens for a change event.
//The change event happens when the user selects a file. function(){} runs after the user picks an image.

    const file=this.files[0];// this keyword refers to the PhotoInput element because we used a normal function.files contains all selected files.
                              //[0] gets the first selected file.
     console.log("file:", file);//in console it prints it out the url of file ,helps in debugging

    if(file){//Checks whether a file exists.If the user selects an image, file contains data, so this becomes true. If no file is selected, the code inside won't run.
       
        const imageURL = URL.createObjectURL(file);//Creates a temporary URL for the selected image.

       console.log("image url:",imageURL);//in console it prints it out the url of image ,helps in debugging
  
       previewImg.src = imageURL;//Sets the image source of your preview image.
        
        previewImg.style.display = "block";//Makes the preview image visible.
        //usually image starts hidde display:none; after this display:block;<=this show on the page
       
        Placeholder.style.display = "none";
        // Hides the placeholder text or default image.
    
}
});
const deleteBtn = document.getElementById("deleteBtn");
deleteBtn.addEventListener("click" , () =>{

    previewImg.src="";//remove image from preview
    previewImg.style.display = "none";//hide preview image
    Placeholder.style.display = "block";//show placeholder again ,bring back "submit photo"
    PhotoInput.value = "";// clear selected files

    
});

const colorButtons = document.querySelectorAll('.color-options button'
    
);//select all color buttons
let card = document.querySelector('#card');//select the card element and change to your card's class/id
colorButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const selectedColor = button.getAttribute('data-color');
        card.style.backgroundColor = selectedColor;
        colorButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    })
});



