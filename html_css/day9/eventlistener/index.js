let myLeads=[];
let inputEl=document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")
let deleteBtn= document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    renderLeads();
}

deleteBtn.addEventListener("dblclick", function() {
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
    renderLeads();
})


inputBtn.addEventListener("click",function()
{
    myLeads.push(inputEl.value);
    ulEl.innerHTML +=`<li><a target='_blank' href='#'> ${inputEl.value} </a></li>`
    inputEl.value="";    
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    console.log(localStorage.getItem("myLeads"))
}); 
function renderLeads()
{
    let listItems = "<li>" +inputEl.value + "</li>"
    ulEl.innerHTML +=listItems;

for(let i=0;i<myLeads.length;i++)
{
    listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
}
ulEl.innerHTML = listItems  

}
