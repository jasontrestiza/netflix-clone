import React from "react"
import { createContext, useContext } from "react"
import {auth,db} from "../firebase"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged} from "firebase/auth"
import {doc,setDoc} from "firebase/firestore"

const AuthContext = createContext()

export function AuthContextProvider({children}){

    const [user,setUser] = React.useState({})

    const signUp = (email,password) => {
        createUserWithEmailAndPassword(auth,email,password)
        setDoc(doc(db, 'users',email), 
            {
                favoriteMovies: []
            })
    }

    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    React.useEffect(()=>{
        const isLoggedIn = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            isLoggedIn()
        }
    })

    return(
        <AuthContext.Provider value={{signUp, logIn,logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext);
}