import { useState, createContext } from "react";

// within the file, AuthContext is created 
const AuthContext = createContext(null)

// Define AuthProvider component
export const AuthProvider = () => {

    // within the component, userState is maintained & define the functions to log in and log out
    const [user, setUser] = useState(null)

    // use setUser to define log in function    
    const login = user => {
        setUser(user)
    }

    // use setUser to define log out function
    const logout = () => {
        setUser(null)
    }
}

