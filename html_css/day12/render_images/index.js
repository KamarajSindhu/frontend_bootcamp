const imgs = [
    "hip1.jpg",
    "hip2.jpg",
    "hip3.jpg"
]

const container = document.getElementById("container")

function render() {
    let imgsDom=""
    for (let i = 0; i < imgs.length; i++) {
        imgsDom += `<img class="team-img" src="${imgs[i]}">`
    }
    container.innerHTML = imgsDom
}

render()