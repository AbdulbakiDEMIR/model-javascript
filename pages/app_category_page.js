// import { PageComponent2 } from "../components/page2.js";

function createPageComponent(){
    return`
        <div class="main-bg">
            <div class="full-center">
                <div class="transparent-card">
                    <h1 class="main-title">Welcome to the Category Page</h1>
                    <button class="btn btn-danger" onclick="changePage('')">Go to Main Page</button>
                </div>
            </div>
        </div>
    `
}


export function AppCategoryPage() {
    document.getElementById('app').innerHTML = `
        ${createPageComponent()}
    `;
}
