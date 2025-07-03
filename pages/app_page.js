// import { PageComponent2 } from "../components/page2.js";

function createPageComponent(){
    return`
        <div class="main-bg">
            <div class="full-center">
                <div class="transparent-card">
                    <h1 class="main-title">Welcome to the App Page</h1>
                </div>
            </div>
        </div>
    `
}


export function AppPage() {
    document.getElementById('app').innerHTML = `
        ${createPageComponent()}
    `;
}
