import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../../firebase/firebase";
import axios from "axios";


export const AuthContext = createContext('')
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (user, name, photo) => {
        return updateProfile(user, { displayName: name, photoURL: photo })
    }

    const verification = (user) => {
        return sendEmailVerification(user)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            
            if(currentUser){
                axios.post('https://martial-verse-server-joy041.vercel.app/tokens', {email : currentUser.email})
                    .then(data => {
                        localStorage.setItem('martial-verse-token', data.data.token)
                        setLoading(false)
                    })
            }
            else {
                localStorage.removeItem('martial-verse-token')
            }
        });
        return () => {
            unsubscribe();
        }

    }, [])

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const userValue = {
        signUp,
        updateUserProfile,
        verification,
        login,
        passwordReset,
        logout,
        user,
        loading,
        googleLogin,
        githubLogin
    }

    return (
        <AuthContext.Provider value={userValue} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;