// import { Page1 } from "../pages/page1_page.js";
import { MainPage } from "../pages/main_page.js";
import { AppPage } from "../pages/app_page.js";

export const routing_data = [
    {
        path:null,
        page: () => MainPage()
    },
    {
        path:"app",
        page: () => AppPage()
    }
 
]