import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {UserAuth} from "../context/AuthContext"

const Navbar = () => {
    const {user,logOut} = UserAuth()
    const redirect = useNavigate()
    
    const handleLogOut = async () => {
        try{
            await logOut()
            redirect('/')
            window.location.reload();
        }catch(e){
            console.log(e)
        }
    }
    
    return(
        <div className='flex items-center justify-between p-4 z-[100] absolute w-full'>
            <Link to='/'>
                <h1 className='text-red-600 text-4xl font-bold cursor-pointer '>NETFLIX</h1>
            </Link>
            {
                user?.email ? 
                    <div>
                        <Link to='/myprofile'>
                        <button className='text-white pr-4'>My Profile</button>
                        </Link>
                        
                        
                        <button onClick={handleLogOut} className='bg-red-600 px-6 py-2 rounded text-white'>Log Out</button>
                        
                    </div>
                    :
                    <div>
                        <Link to='/login'>
                        <button className='text-white pr-4'>Sign in</button>
                        </Link>
                        
                        <Link to='/signup'>
                        <button className='bg-red-600 px-6 py-2 rounded text-white'>Sign up</button>
                        </Link>
                    </div>
            }
        </div>
    )
}

export default Navbar;