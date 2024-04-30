let myLeads=[];
let inputEl=document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")
inputBtn.addEventListener("click",function()
{
    myLeads.push(inputEl.value);
    ulEl.innerHTML +="<li><a target='_blank' href='#'>" +inputEl.value + "</a></li>"

    inputEl.value="";
    
}); 
// function renderLeads()
// {
//     let listItems = "<li>" +inputEl.value + "</li>"
//     ulEl.innerHTML +=listItems;

// for(let i=0;i<myLeads.length;i++)
// {
//     listItems 
//     // const li = document.createElement("li")
//     // li.textContent=myLeads[i]
//     // ulEl.append(li);

// }

// }
