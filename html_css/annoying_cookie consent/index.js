const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')

setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})


consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    const consentFormData = new FormData(consentForm)
    // console.log(consentFormData)
    const fullName = consentFormData.get('userName')

    modalText.innerHTML = `
    <div class="modal-inner-loading">
        <img src="assets/loading.svg" class="loading">
        <p id="uploadText">
            Uploading your data to the dark web...
        </p>
    </div>`
    setTimeout(function(){
        document.getElementById('uploadText').innerText= 'Making the sale...'
      },1500)
      
//
setTimeout(function(){
    document.getElementById('modal-inner').innerHTML = `
    <h2>Thanks <span class="modal-display-name">${fullName}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="assets/pirate.gif">
    </div>
`
}, 3000)



})

