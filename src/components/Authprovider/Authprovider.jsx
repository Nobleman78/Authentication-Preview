import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../Utility/firebase";

export const AuthContext = createContext(null);
const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser  = ()=>{
        setLoading(true)
        return signOut(auth);

    }
    const signInWithGoogle =()=>{
        return signInWithPopup(auth)
    }

    // Using this we can easily find out that which user just log in
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('Current User', currentUser)
            setUser(currentUser)
            setLoading(false);

        })
        // We are doing unmount
        return () => {
            unSubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        signUser,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};
Authprovider.propTypes = {
    children: PropTypes.object
}



export default Authprovider;