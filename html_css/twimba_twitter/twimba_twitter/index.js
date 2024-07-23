


import { tweetsData } from "./data.js";
const tweetInput = document.getElementById('tweet-input')
const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function(){

    console.log(tweetInput.value)
    })

function getFeedHTML(){
    let feedHtml = ``;
    tweetsData.forEach(function(tweet){
        feedHtml+=`<div class="tweet">
    <div class="tweet-inner">
        <img src="${tweet.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${tweet.handle}</p>
            <p class="tweet-text">${tweet.tweetText}</p>
            <div class="tweet-details">
                <span class="tweet-detail">
                    <i class="fa-regular fa-comment-dots"></i>
                    ${tweet.replies.length}
                    data-reply = "${tweet.uuid}"
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-heart"></i>
                    ${tweet.likes}
                data-heart = "${tweet.uuid}"
                </span>
                <span class="tweet-detail">
                <i class="fa-solid fa-retweet"></i>
                    ${tweet.retweets}
                data-retweet ="${tweet.uuid}"
                </span>
            </div>   
        </div>            
    </div>
</div>`

    })
    return feedHtml
}

function render()
{
    document.getElementById('feed').innerHTML=getFeedHTML();
}
render()
    
        
    

