import React from "react"
import SavedFavoriteMovies from "../components/SavedFavoriteMovies"

const MyProfile = () => {
    return (
        <>
          <div className="w-full text-white">
            <img className="w-full h-[460px] relative object-cover sm:block" src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/ba677a9d-1f7c-415a-b2bd-22877f131b6a/PH-en-20220822-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
            <div className="fixed w-full h-[550px] bg-black/60 top-0 left-0"></div>
            <div className="absolute top-[43%] py-4 my-4 sm:top-[54%]">
                <h1 className="font-bold text-4xl p-4 md:text-5xl">My Favorite Shows</h1>
            </div>
          </div>  
         <SavedFavoriteMovies/>
        </>
    )
}

export default MyProfile;