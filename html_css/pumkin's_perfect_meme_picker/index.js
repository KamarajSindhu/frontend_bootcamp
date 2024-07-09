import { catsData  } from "./data.js";

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')

getImageBtn.addEventListener('click', getMatchingCatsArray)

function getMatchingCatsArray(){

    const isGif = gifsOnlyOption.checked;       
    if(document.querySelector('input[type="radio"]:checked')){
        const selectedEmotions = document.querySelector('input[type="radio"]:checked').value
        const isGif = gifsOnlyOption.checked
        
        const matchingCatsArray = catsData.filter(function(cat){
            if(isGif){
                return cat.emotionTags.includes(selectedEmotions) && cat.isGif
            }
            else{
                return cat.emotionTags.includes(selectedEmotions)
            }
           
        })
        return matchingCatsArray
    }  
}

    

        


emotionRadios.addEventListener('change',highlightCheckedOption)
 function highlightCheckedOption(e){

    const radios = document.getElementsByClassName('radio') 
     
    for(let radio of radios)
        {
        radio.classList.remove('highlight')
        }

    document.getElementById(e.target.id).parentElement.classList.add('highlight')

 }

 function getSingleCatObject()
 {
    const catsArray = getMatchingCatsArray();
    if(catsArray.length===1){
        console.log(catsArray[0])
    }
    else {
        const randomNumber = Math.floor(Math.random() * catsArray.length)
        return(catsArray[randomNumber])
    }
 }

 function renderCat(){
    getSingleCatObject()

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