// import { PageComponent2 } from "../components/page2.js";

function createPageComponent(){
    return`
        <div class="main-bg">
            <div class="full-center">
                <div class="transparent-card d-flex flex-column justify-content-between ">
                    <h1 class="main-title">Welcome to the Main Page</h1>
                    <div class="full-center align-items-end justify-content-around">
                        <button class="btn btn-danger" onclick="changePage('category')">Go to Select Category</button>
                        <button class="btn btn-danger" onclick="changePage('rating')">Go to Rating Page</button>
                    </div>
                </div>
            </div>
        </div>
    `
}


export function MainPage() {
    document.getElementById('app').innerHTML = `
        ${createPageComponent()}
    `;
}
