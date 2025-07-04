// import { PageComponent2 } from "../components/page2.js";

function createPageComponent(){
    return`
        <div class="main-bg">
            <div class="full-center">
                <div class="transparent-card">
                    <h1 class="main-title">Welcome to the Rating Page</h1>
                    <div class="movie-list">
                        ${imageComponent(1)}
                        ${imageComponent(2)}
                    </div>
                    <button class="btn btn-danger" onclick="changePage('')">Go to Main Page</button>
                </div>
            </div>
        </div>
    `
}function imageComponent(id){
    return `
        <div class="movie-container mx-auto w-50">
            <div class="movie-image ratio ratio-1x1">
                <img src="https://picsum.photos/500/400" alt="Placeholder Image" class="image">
                <div class="movie-details">
                    <h3>Movie Title </h3>
                    <div class="movie-info">
                        <p>Rating: 8.5/10</p>
                        <p>Release Date: 2023-10-01</p>
                    </div>
                </div>
            </div>
            <div id="rating${id}" onload="rating(${id})" value="0" class="rating-stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
        </div>

    `;
}


export function AppRatingPage() {
    document.getElementById('app').innerHTML = `
        ${createPageComponent()}
    `;

    function rating(id){
        document.querySelectorAll( '#rating'+id+' i').forEach((star, index) => {
            star.addEventListener('click', () => {
                document.getElementById('rating'+id).setAttribute('value', index);
                const stars = document.querySelectorAll('#rating'+id+' i');
                stars.forEach((s, i) => {
                    s.classList.toggle('fa-solid', i <= index);
                    s.classList.toggle('fa-regular', i > index);
                });
            });
        });
        document.querySelectorAll( '#rating'+id+' i').forEach((star, index) => {
            star.addEventListener('mouseover', () => {
                const stars = document.querySelectorAll('#rating'+id+' i');
                stars.forEach((s, i) => {
                    s.classList.toggle('fa-solid', i <= index);
                    s.classList.toggle('fa-regular', i > index);
                });
            });
        });
        document.querySelectorAll( '#rating'+id+' i').forEach((star, index) => {
            star.addEventListener('mouseout', () => {
                index = parseInt(document.getElementById('rating'+id).getAttribute('value'));
                const stars = document.querySelectorAll('#rating'+id+' i');
                stars.forEach((s, i) => {
                    s.classList.toggle('fa-solid', i <= index);
                    s.classList.toggle('fa-regular', i > index);
                });
            });
        });
        
    }
    rating(1);
    rating(2);

}
