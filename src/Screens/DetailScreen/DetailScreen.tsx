import React, { useContext} from "react";
import { ScreenContextProvider } from "../context/ScreenContextProvider";
import { useLocation } from "react-router-dom";
import { MovieContext } from "../../common/context/MovieContext/MovieContext";
import { ColumnScroll } from "../../common/components/Container/ColumnScroll";
import { MovieSection } from "../../common/components/MovieSection/MovieSection";
import { MovieCard } from "../../common/components/Card/MovieCard";
import { MovieDetail } from "./component/MovieDetail";


export const DetailScreen: React.FC = () => {
  const {pathname} = useLocation();
  const { state } = useContext(MovieContext);
  let data=[];
  let PageTitle = "Trending";
  
  
    if(pathname === '/favorite'){
      PageTitle="Favorite";
      data=(Object.keys(state).filter((movieId) => state[movieId].isFavorite));
     }else{
      PageTitle="Trending";
      data=Object.keys(state).filter((movieId) => state[movieId].isTrending);
     }
  
  

  return (
    <ScreenContextProvider defaultSelected={data.length > 0 ? data[0] : ""}>
      <ColumnScroll>
        <MovieSection
          movies={data}
          sectionTitle={PageTitle}
          Component={MovieCard}
        />
        {data.length > 0 && <MovieDetail />}
      </ColumnScroll>
    </ScreenContextProvider>
  );
};
