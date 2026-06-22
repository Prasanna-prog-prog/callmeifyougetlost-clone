let nameInput = document.getElementById("nameInput");//this is the box of name in potrait
let cardName = document.getElementById("cardName");//this is name in the card 

nameInput.addEventListener("input" , function(){//when the name iswritten by the user in the box
 cardName.textContent = nameInput.value || "Name";// using the textContent it written visible inside in name in the card.
});

let birth = document.getElementById("birth");
let cardbirth = document.getElementById("cardbirth");

birth.addEventListener("input" , function(){
 cardbirth.textContent = birth.value ||"DateOfBirth";
});

let loc = document.getElementById("loc");
let cardloc= document.getElementById("cardloc");

loc.addEventListener("input" , function(){
 cardloc.textContent = loc.value || "Location";
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

//signature concept is called CANVAS API
const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext('2d');
 
let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown',startDrawing);
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',stopDrawing);
canvas.addEventListener('mouseleave',stopDrawing);

canvas.addEventListener('touchstart',startDrawing);
canvas.addEventListener('touchmove',draw);
canvas.addEventListener('touchend',stopDrawing);
canvas.addEventListener('touchcancel',stopDrawing);

function startDrawing(e){
    e.preventDefault();
    isDrawing = true;

    const pos = getPosition(e);
    lastX = pos.x;
    lastY = pos.y;
}

function getPosition(e){
    const rect = canvas.getBoundingClientRect();

    if (e.touches){
        return{
        x:e.touches[0].clientX - rect.left,
        y:e.touches[0].clientY - rect.top
        };
    }else{
        return{
            x:e.clientX - rect.left,
            y:e.clientY - rect.top,

        };
    }

    }
    function draw(e){
        e.preventDefault();
        if(!isDrawing)return;
        const pos = getPosition(e);

        ctx.beginPath();
        ctx.moveTo(lastX,lastY);
        ctx.lineTo(pos.x,pos.y);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin='round';
        ctx.stroke();
        lastX=pos.x;
        lastY = pos.y;
    }
    function stopDrawing(){
        isDrawing = false;

    }



