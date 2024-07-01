import { useState, useContext, createContext } from "react";

// within the file, AuthContext is created 
const AuthContext = createContext(null)

// Define AuthProvider component
export const AuthProvider = ({ children }) => {

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

    // provide values using the AuthContext.Provider
    return (
        <AuthContext.Provider value={{user, login, logout}} >
            {children}
        </AuthContext.Provider>
    )
}

    // define a function that returns AuthContext
    export const useAuth = () => {
        return useContext(AuthContext)
    }


