// import { Page1 } from "../pages/page1_page.js";
import { MainPage } from "../pages/main_page.js";
import { AppCategoryPage } from "../pages/app_category_page.js";
import { AppRatingPage } from "../pages/app_rating_page.js";

export const routing_data = [
    {
        path:null,
        page: () => MainPage()
    },
    {
        path:"category",
        page: () => AppCategoryPage()
    },
    {
        path:"rating",
        page: () => AppRatingPage()
    }
 
]