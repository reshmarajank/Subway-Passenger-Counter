let incrementEl=document.getElementById("increment-el")
let countEl=document.getElementById("count-el")
let saveEL=document.getElementById("save-el")
let previousElement=document.getElementById("previous-element")
let resetEl=document.getElementById("reset-el")
let count=0
let save

incrementEl.addEventListener("click",function(){
    count+=1;
    countEl.textContent=count

})
saveEL.addEventListener("click",function(){
    save=count
    previousElement.textContent+=save+"-"
    count=0
   countEl.textContent=0
})

resetEl.addEventListener("click",function(){
    previousElement.textContent="Previous Element:"
})
