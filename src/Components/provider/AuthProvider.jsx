import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext=createContext(null)
const googleProvider =new GoogleAuthProvider()

 const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const[loading,setLoading]=useState(true)


// login er jonno
const loginUser=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

// register er jonno
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
   
}
// google login
const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}


// logout

const logOut=()=>{
    setLoading(true)
    return signOut(auth)
}

useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
setUser(currentUser)
console.log('inside useEffect',currentUser)
setLoading(false)
    })
    return ()=>{
        unSubscribe()
    } 
},[])

const obj={user,createUser,loginUser,logOut,googleLogin}

    return (
        <AuthContext.Provider value={obj}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;