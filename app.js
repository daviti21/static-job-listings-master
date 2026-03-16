const logo = document.querySelectorAll(".logo");
 function backImg(){
    for(let i = 0; i < logo.length; i++){
        logo[0].style.backgroundImage = `url(photosnap.svg)`;
        logo[1].style.backgroundImage = `url(manage.svg)`;
        logo[2].style.backgroundImage = `url(account.svg)`;
        logo[3].style.backgroundImage = `url(myhome.svg)`;
        logo[4].style.backgroundImage = `url(loop-studios.svg)`;
        logo[5].style.backgroundImage = `url(faceit.svg)`;
        logo[6].style.backgroundImage = `url(shortly.svg)`;
        logo[7].style.backgroundImage = `url(insure.svg)`;
        logo[8].style.backgroundImage = `url(eyecam-co.svg)`;
        logo[9].style.backgroundImage = `url(air.svg)`;

    }
 }

 backImg()

 function fList(){
    const list = document.querySelector(".list");
 const listCat = document.querySelector(".list-category");
 const category = document.querySelectorAll(".category");
 const vacansyBox = document.querySelectorAll(".vacansy-box")
 category.forEach(el => {
    el.addEventListener("click", ()=> {
        el.style.backgroundColor ="#5ca5a4";
        el.style.color = "white";
const filter = document.querySelectorAll(".lLeft");
const res = [...filter].some(fil => fil.textContent === el.textContent);

if (res) return;
list.style.display = "flex";
const catBox = document.createElement("div");
listCat.appendChild(catBox);
catBox.classList.add("catBox")
const lLeft = document.createElement("p");
catBox.appendChild(lLeft)
lLeft.textContent = el.textContent;
lLeft.classList.add("lLeft");

 const lRight = document.createElement("div");
 lRight.classList.add("lRight");
 catBox.appendChild(lRight);
 updateVacansy();
 
 const parent = lRight.closest(".catBox")
function remEl(){
    el.style.backgroundColor = "#c9ebeb";
        el.style.color = "#6fa8a6"; 
  if(listCat.children.length === 0){
    list.style.display = "none";
}
}


 lRight.addEventListener("click", () => {
    parent.remove()
     remEl()
     updateVacansy()
 })

 const parentArr = document.querySelectorAll(".catBox");
 const clear = document.querySelector(".clear");
 clear.addEventListener("click", () => {
    for(let i = 0; i < parentArr.length; i++){
         parentArr[i].remove()
    }
    remEl()
    updateVacansy()
 })
  
 
  
 })
 function updateVacansy(){

const left = document.querySelectorAll(".lLeft");

vacansyBox.forEach(box => {

const category = box.querySelectorAll(".category");

let match = true;

left.forEach(ltxt => {

const result = [...category].some(cat =>
cat.textContent === ltxt.textContent
);

if(!result){
match = false;
}

});

box.style.display = match ? "flex" : "none";

});

} 
  
  
 })}

 fList()

   