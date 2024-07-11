const inputbox=document.getElementById("input-box")
const listContaoner=document.getElementById("list-container")

function addTask(){
    if (inputbox.value===''){
        alert("first add somethin in list ")

    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputbox.value
        listContaoner.appendChild(li)
        let span=document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    inputbox.value=''
    saveData()
}

listContaoner.addEventListener("click",function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
        saveData()

    }
})

// it is used to store the data in browser in name of "data"
function saveData(){
    localStorage.setItem("data",listContaoner.innerHTML)

}
// it is used to retrive the stored data in browser and shoe it again 
function showTask(){
    listContaoner.innerHTML=localStorage.getItem("data")
}

showTask()