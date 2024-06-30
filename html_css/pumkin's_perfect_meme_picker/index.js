import { catsData  } from "./data.js";

const emotionRadios = document.getElementById('emotion-radios')

function getEmotionsArray(cats){
    const emotionsArray = [];    
      for(let cat of cats)
        for(let emotions of cat.emotionTags)
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
        radioItems += `<p>${emotion}</p>`
    }
    emotionRadios.innerHTML = radioItems;
}

renderEmotionsRadios(catsData)