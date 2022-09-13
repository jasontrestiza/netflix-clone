import React from "react";
import Main from "../components/Main"
import RecommendedMovies from "../components/Recommended"
import requests from "../Requests"

const Home = () => {
    return(
        <div>
            <Main/>
            <RecommendedMovies rowID='1' title='Upcoming' fetchURL={requests.requestUpcoming} />
            <RecommendedMovies rowID='2' title='Popular' fetchURL={requests.requestPopular} />
            <RecommendedMovies rowID='3' title='Trending' fetchURL={requests.requestTrending} />
            <RecommendedMovies rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
            <RecommendedMovies rowID='5' title='Horror' fetchURL={requests.requestHorror} />
        </div>
    )
}

export default Home;