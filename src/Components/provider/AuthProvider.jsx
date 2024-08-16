import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext=createContext(null)

 const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)


// login er jonno
const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

// register er jonno
const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
   
}

// logout

const logOut=()=>{
    return signOut(auth)
}

useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,(currentUser)=>{
setUser(currentUser)
console.log('inside useEffect',currentUser)
    })
    return ()=>{
        unSubscribe()
    } 
},[])

const obj={user,createUser,loginUser,logOut}

    return (
        <AuthContext.Provider value={obj}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;