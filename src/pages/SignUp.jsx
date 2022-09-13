import React from "react"
import {Link, useNavigate} from "react-router-dom"
import {UserAuth} from "../context/AuthContext"

const Signup = () => {
    
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');


    const {user, signUp} = UserAuth()
    const redirect = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        try{
            await signUp(email,password)
            redirect('/')
           
        }
        catch(error){
            console.log(error)
        }
       
    }
   
    const handleChange = (e) => {
        if(e.target.name === 'email' ){
            setEmail(e.target.value)
        }
        else{
            setPassword(e.target.value)
        }
    }

    

    return (
        <div className="w-full h-full">
            <img className="hidden w-full h-full absolute object-cover sm:block " src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/ba677a9d-1f7c-415a-b2bd-22877f131b6a/PH-en-20220822-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
            <div className="bg-black/50 top-0 left-0 fixed w-full h-full"></div>
            <div className="fixed w-full px-4 py-24 z-50">
                <div className="bg-black/70 max-w-[400px] h-[500px] mx-auto text-white">
                    <div className="max-w-[320px] mx-auto py-16">
                        <h1 className="text-4xl font-bold">Sign up</h1>
                        <form onSubmit={handleSubmit} className="flex flex-col w-full py-4">
                            <input onChange={handleChange} name="email" className="p-2 my-2 rounded bg-gray-600 " type="email" placeholder="Email"/>
                            <input onChange={handleChange} name="password" className="p-2 my-2 rounded bg-gray-600" type="password" placeholder="Password"/>
                            <button className="bg-red-600 p-2 my-3 rounded">Sign up</button>
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <p><input className="mr-2" type="checkbox"/>Remember me</p>
                                <p>Need Help?</p>
                            </div>
                            <p className="py-5">
                                <span className="mr-1 text-sm text-gray-600">
                                    Already Subscribe to Netflix?
                                </span>
                                <Link to='/login'>
                                    Sign In
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;