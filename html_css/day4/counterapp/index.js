let count=0;

function increment()
{
    count +=1;
    document.getElementById("count-el").innerHTML=count;
}
 function save()
{
    let conStr =" " + count + "-"; 
    document.getElementById("save-el").innerHTML += conStr;
    document.getElementById("count-el").innerHTML =0;

}
