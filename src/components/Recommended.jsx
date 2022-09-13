import React from "react"
import axios from "axios"
import Movies from "../components/Movies"
import {MdChevronLeft, MdChevronRight} from "react-icons/md"

const Recommended = ({title,fetchURL,rowID}) =>{

    const [movies,setMovies] = React.useState([]);

    React.useEffect(()=>{
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    },[fetchURL])

  
    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
 
    }

    const slideRight = () => {
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return(
        <>
            <h2 className="text-white font-bold p-4 md:text-xl">{title}</h2>
            <div className="group relative flex items-center  ">
                <MdChevronLeft size={40} onClick={slideLeft} className="absolute left-0 bg-white rounded-full opacity-50 cursor-pointer z-10 hidden group-hover:block hover:opacity-90"/>
                    <div id={'slider' + rowID} className="w-full h-full relative overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide ">
                        {movies.map((items,id)=>(
                            <Movies key={id} items={items}/>
                        ))}
                    </div>
                <MdChevronRight size={40} onClick={slideRight} className="absolute right-0 bg-white rounded-full opacity-50 cursor-pointer z-10 hidden group-hover:block hover:opacity-90"/>
            </div>
        </>
    )
}

export default Recommended;