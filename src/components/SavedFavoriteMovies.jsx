import React from "react"
import {MdChevronLeft, MdChevronRight} from "react-icons/md"
import {AiOutlineClose} from "react-icons/ai"
import { UserAuth } from "../context/AuthContext"
import { db } from "../firebase"
import { doc,updateDoc,onSnapshot } from "firebase/firestore"

const SavedFavoriteMovies = () => {
    const [movies,setMovies] = React.useState([])

    const {user} = UserAuth();
    const referenceDoc = doc(db,'users', `${user?.email}`);
    React.useEffect(() => {
        onSnapshot(referenceDoc, (doc)=>{
            setMovies(doc.data()?.favoriteMovies);
        })
    },[user?.email]);

    const slideLeft = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
 
    }

    const slideRight = () => {
        var slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
    const deleteFavorite = async(favoriteID) => {
        try{
            const result = movies.filter((items) => items.id !== favoriteID)
            await updateDoc(referenceDoc,{
                favoriteMovies: result,
                
            });
        
        }
        catch(e){
            alert(e)
        }
    }
    return(
        <>
        {/* <h2 className="text-white font-bold p-4 md:text-xl">My Shows</h2> */}
            <div className="group relative flex items-center p-4">
  
                {/* <MdChevronLeft size={40} onClick={slideLeft} className="absolute left-0 bg-white rounded-full opacity-50 cursor-pointer z-10 hidden group-hover:block hover:opacity-90"/> */}
                    <div id={'slider'} className="w-full h-full">
                        {movies.map((items,id)=>(
                            <div key={id}className="w-full inline-block m-auto relative p-2 sm:w-[210] md:w-[263px] md:m-auto lg:[350px]">
                                <img className="block w-full h-auto" src={`https://image.tmdb.org/t/p/w500${items?.img}`}  alt={items?.title}  />
                                <div className="absolute cursor-pointer top-0 left-0 w-full h-full opacity-0 text-white hover:bg-black/75 hover:opacity-100">
                                    <p className="flex justify-center items-center text-center h-full white-space-normal text-xs font-bold md:text-sm">{items.title}</p>
                                    <p onClick={()=>deleteFavorite(items.id)} className=" absolute top-4 right-4  font-bold hover:text-red-600"><AiOutlineClose/></p>
                                </div>
                            </div>
                        ))}
                    </div>
                {/* <MdChevronRight size={40} onClick={slideRight} className="absolute right-0 bg-white rounded-full opacity-50 cursor-pointer z-10 hidden group-hover:block hover:opacity-90"/> */}
            </div>
        </>
    )
}

export default SavedFavoriteMovies