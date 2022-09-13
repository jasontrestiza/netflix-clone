import React from "react"
import {FaHeart,FaRegHeart} from "react-icons/fa"
import {UserAuth} from "../context/AuthContext"
import {db} from "../firebase"
import { arrayUnion,doc,updateDoc } from "firebase/firestore"

const Movies = ({id,items }) => {
    
    const [favorite,setFavorite] = React.useState(false);
    const {user} = UserAuth();

    const movieID = doc(db,'users',`${user?.email}`)

    const saveFavoriteMovies = async() => {
        if(user?.email){
            setFavorite(!favorite)
            await updateDoc(movieID, {
                favoriteMovies: arrayUnion({
                    id: items.id,
                    title: items.title,
                    img: items.backdrop_path,
                }),
            });
            
        }
        else{
            alert('Please login to save movies.')
        }
    }
  
    return(
        <div className="w-[160px] inline-block  relative p-2 sm:w-[200px] md:w-[240px] lg:[280px] ">
            <img className="block w-full h-auto" src={`https://image.tmdb.org/t/p/w500${items?.backdrop_path}`}  alt={items?.title}  />
            <div className="absolute cursor-pointer top-0 left-0 w-full h-full opacity-0 text-white hover:bg-black/75 hover:opacity-100">
                <p className="flex justify-center items-center text-center h-full white-space-normal text-xs font-bold md:text-sm">{items.title}</p>
                <p onClick={saveFavoriteMovies}>
                    {
                        favorite ? <FaHeart className="absolute top-4 left-4 text-gray-300"/>:<FaRegHeart className="absolute top-4 left-4 text-gray-300"/>
                    }
                </p>
            </div>
        </div>
    )
}

export default Movies;