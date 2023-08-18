const searchBar = document.getElementById("search-bar");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(searchBar.value === ''){
        alert("Please write some Task");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = searchBar.value; //searchbar ma lekheko value li ma add garxa
        listContainer.appendChild(li);

        let span= document.createElement("span");
        span.innerHTML = "\u00d7"; //cross button ko code
        li.appendChild(span);

    }
    searchBar.value= ""; //It clear search button ma lekeheko task and task nchai tala add hunxa
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");

}

showTask();

