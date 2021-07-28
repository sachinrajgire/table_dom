// ITEM --No indexing needed - does not return HTML Collection
document.getElementById --<div></div>
querySelector---- <div></div>
// ---------------------------
collection[1]
document.getElementsByClassName --[<div></div>]
document.getElementsByTagName -[]
document.querySelectorAll -[]




let table = document.getElementById("customers")

console.log(table,'table');
table.style.display = "none" ;


function addclickhandler() {
let doc=document.querySelector("input").value
let li = document.createElement("li")
console.log(li,'li');
li.setAttribute("onclick","done(this)");    

let text = document.createTextNode(doc)
li.appendChild(text)
console.log(li,'li');
let ele = document.querySelector("#ol-list")
ele.appendChild(li)

}

function done(item) {
    console.log(event,'event');
    item.style.textDecoration="line-through"
}

function changeBackground() {
document.getElementsByTagName("li").forEach((item)=>{
     item.style.backgroundColor="red" ;
})
// let items = document.getElementsByTagName("li")

// let tag= document.getElementsByTagName("li")
// let querySelector= document.querySelectorAll("li")
// console.log(tag,'TAG');
// console.log(querySelector,'querySelector');
}