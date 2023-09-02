import { RoutesType } from "./type";
import { HomeScreen, DetailScreen } from "../Screens";

export const RoutesConfig : RoutesType = {
    Home:{
        path: "/",
        Component: HomeScreen
    },
    Favorite : {
        path: "favorite",
        Component: DetailScreen
    },
    Trending : {
        path: "trending",
        Component: DetailScreen
    }
} 
