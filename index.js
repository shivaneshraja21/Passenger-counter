
let saveEl=document.getElementById("save-el")

let count=0
let countEl=document.getElementById("count-el")
function increment(){
    count+=1
    countEl.textContent=count
    console.log(count)
}
function save(){
    saveEl.textContent+=count+" - "
    countEl.textContent=0
    count=0
}
/*
let wel=document.getElementById("wel-el")
let name="shiva"
let greeting="Welcome, "
wel.innerText=greeting + name +"❤"*/