import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../assets/firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app);


// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
    
    const createUser = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)

    }

    const authInfo = {
        user,
        createUser
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;