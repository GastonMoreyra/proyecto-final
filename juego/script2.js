// API de Drag and Drop

let img1=document.querySelector('#img1');

img1.addEventListener('dragstart',(e)=>{
    console.log("se inicio el arrastre");
    e.dataTransfer.setData("Text","../VIdeosImagenes/rompe2.png");
});

img1.addEventListener('dragend',()=>{
    console.log("se solto la imagen 1");
   // img1.style.display="none"
});



let box2=document.querySelector("#box2");

box2.addEventListener('dragover',(e)=>{
    e.preventDefault()
});

box2.addEventListener('drop',(e)=>{
    let infoSrc = e.dataTransfer.getData("Text");
    box2.innerHTML=`<img src="${infoSrc}"/>`;
    img1.style.display="none";
   // box2.innerHTML=`<img src="../VIdeosImagenes/rompe2.png"/>`;
    
})



////////////

let img2=document.querySelector('#img2');

img2.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData("Text","../VIdeosImagenes/Rompe1.png");
});

img2.addEventListener('dragend',()=>{
    console.log("se solto la imagen 2")
});

let box1=document.querySelector('#box1');

box1.addEventListener('dragover',(e)=>{
    e.preventDefault()
});

box1.addEventListener('drop',(e)=>{
    let infoSrc2 = e.dataTransfer.getData("Text");
    box1.innerHTML=`<img src="${infoSrc2}"/>`;
    img2.style.display="none"
});


///////////////////



let img3=document.querySelector('#img3');

img3.addEventListener('dragstart',(e)=>{
    e.dataTransfer.setData("Text","../VIdeosImagenes/Rompe3.png");
});

img3.addEventListener('dragend',()=>{
    console.log("se solto la imagen 3");
});

let box3=document.querySelector('#box3');

box3.addEventListener('dragover',(e)=>{
    e.preventDefault()
});

box3.addEventListener('drop',(e)=>{
    let infoSrc3=e.dataTransfer.getData("Text");
    box3.innerHTML = `<img src="${infoSrc3}"/>`;
    img3.style.display="none";
});

function reinicio() {
    window.location.reload();
}
   
