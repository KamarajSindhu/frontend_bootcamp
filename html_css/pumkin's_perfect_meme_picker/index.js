import { catsData  } from "./data.js";

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')

getImageBtn.addEventListener('click', getMatchingCatsArray)

function getMatchingCatsArray(){

    if(document.querySelector('input[type="radio"]:checked')){

        const selectedEmotions = document.querySelector('input[type="radio"]:checked').value
        console.log(selectedEmotions)    
}}


   

        


emotionRadios.addEventListener('change',highlightCheckedOption)
 function highlightCheckedOption(e){

    const radios = document.getElementsByClassName('radio') 
     
    for(let radio of radios)
        {
        radio.classList.remove('highlight')
        }

    document.getElementById(e.target.id).parentElement.classList.add('highlight')

 }


function getEmotionsArray(cats){
    const emotionsArray = []; 
            for(let cat of cats)                
                for(let emotions of cat.emotionTags)
                    if(!emotionsArray.includes(emotions))
                        {
                            emotionsArray.push(emotions);

                        }
             
        
        return emotionsArray;
}

// getEmotionsArray(catsData)


function renderEmotionsRadios(cats){
    let radioItems =``    
        const emotions = getEmotionsArray(cats);
        for (let emotion of emotions){
            radioItems+=`
            <div class ="radio">
            <label for="{$emotion}">${emotion}</label>
            <input 
                    type = "radio" 
                    name= "emotions" 
                    id= "${emotion}"
                    value= "${emotion}"
            >
    </div>
    `
    }
    emotionRadios.innerHTML = radioItems;
        }

renderEmotionsRadios(catsData)