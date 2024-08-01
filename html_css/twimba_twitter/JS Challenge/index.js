document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('gallery-container');



    let isLiked = false;
    let isShared = false;

    document.addEventListener('click', function(e){
        if (e.target.dataset.heart) {
            isLiked = !isLiked;
            render();
        } else if (e.target.dataset.share) {
            isShared = !isShared;
            render();
        }
    });

    function render() { 
        let heartClass = isLiked ? 'liked' : '';
        let shareClass = isShared ? 'shared' : '';

        let imageHtml = `
            <div id="image-1" class="img-container">
                <img src="dino2.jpeg" alt="Man in front of dinosaur">
                <div class="social-icons-container">
                    <i class="fa-solid fa-heart ${heartClass}" data-heart="image-1"></i>
                    <i class="fa-solid fa-share ${shareClass}" data-share="image-1"></i>
                </div>
            </div>
        `;
        galleryContainer.innerHTML = imageHtml;
    }

    render();
});
