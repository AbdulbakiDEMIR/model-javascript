// import { PageComponent2 } from "../components/page2.js";

function createPageComponent(){
    return`
        <div class="main-bg">
            <div class="full-center">
                <div class="transparent-card">
                    <h1 class="main-title">Welcome to the Main Page</h1>
                    <button class="main-button" onclick="changePage('app')">Go to App Page</button>
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
