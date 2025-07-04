// import { PageComponent2 } from "../components/page2.js";


const data = [
    {index:0,id:1,value:0},
    {index:1,id:4,value:0},
    {index:2,id:7,value:0},
    {index:3,id:9,value:0},
    {index:4,id:123,value:0}
]
function createPageComponent(){
    return`
        <div class="main-bg">
            <div class="full-center">
                <div class="transparent-card">
                    <h1 class="main-title">Welcome to the Rating Page</h1>
                    <div class="movie-list" value="${data[0].index}">
                        ${imageComponent(data[0])}
                    </div>
                    <div id="movie-previous-next" class="d-flex justify-content-between">
                        <button onclick="previous()" id="btn-previous" class="btn-sm btn btn-danger" disabled>Previous</button>
                        <button onclick="next()" id="btn-next" class="btn-sm btn btn-danger">Next</button>
                    </div>
                    <button class="btn btn-danger" onclick="changePage('')">Go to Main Page</button>
                </div>
            </div>
        </div>
    `
}function imageComponent(data){
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
            <div id="rating${data.id}"  value="${data.value}" class="rating-stars">
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
    window.next = function(){
        const movieList = document.querySelector(".movie-list");
        const index= parseInt(movieList.getAttribute("value"), 10);
        document.getElementById("btn-next").disabled = false;
        document.getElementById("btn-previous").disabled = false;
        movieList.setAttribute("value",index+1);
        movieList.innerHTML = `
            ${imageComponent(data[index+1])}
        `
        rating(data[index+1])
        if(index+2 === data.length){
            document.getElementById("btn-next").disabled = true;
        } 
    }
    window.previous = function(){
        const movieList = document.querySelector(".movie-list");
        const index= parseInt(movieList.getAttribute("value"), 10);
        document.getElementById("btn-next").disabled = false;
        document.getElementById("btn-previous").disabled = false;
        movieList.setAttribute("value",index-1);
        movieList.innerHTML = `
            ${imageComponent(data[index-1])}
        `
        rating(data[index-1])
        if(index-1 === 0){
            document.getElementById("btn-previous").disabled = true;
        }
    }
    window.rating = function(movieData){
        document.querySelectorAll( '#rating'+movieData.id+' i').forEach((star, index) => {
            star.addEventListener('click', () => {
                const item = data.find(obj => obj.index === movieData.index);
                if (item) {
                item.value = index;
                }
                document.getElementById('rating'+movieData.id).setAttribute('value', index);
                const stars = document.querySelectorAll('#rating'+movieData.id+' i');
                stars.forEach((s, i) => {
                    s.classList.toggle('fa-solid', i <= index);
                    s.classList.toggle('fa-regular', i > index);
                });
            });
        });
        document.querySelectorAll( '#rating'+movieData.id+' i').forEach((star, index) => {
            star.addEventListener('mouseover', () => {
                const stars = document.querySelectorAll('#rating'+movieData.id+' i');
                stars.forEach((s, i) => {
                    s.classList.toggle('fa-solid', i <= index);
                    s.classList.toggle('fa-regular', i > index);
                });
            });
        });
        document.querySelectorAll( '#rating'+movieData.id+' i').forEach((star, index) => {
            star.addEventListener('mouseout', () => {
                index = parseInt(document.getElementById('rating'+movieData.id).getAttribute('value'));
                const stars = document.querySelectorAll('#rating'+movieData.id+' i');
                stars.forEach((s, i) => {
                    s.classList.toggle('fa-solid', i <= index);
                    s.classList.toggle('fa-regular', i > index);
                });
            });
        });
        const index = parseInt(document.getElementById('rating'+movieData.id).getAttribute('value'));
        const stars = document.querySelectorAll('#rating'+movieData.id+' i');
        stars.forEach((s, i) => {
            s.classList.toggle('fa-solid', i <= index);
            s.classList.toggle('fa-regular', i > index);
        });
    }
    rating(data[0])


}
