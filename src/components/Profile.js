import { useNavigate } from 'react-router-dom'
import { useAuth } from './auth'

export const Profile = () => {

    // to display logged in username in the profile, useAuth is used
    const auth = useAuth()
    const navigate = useNavigate()

    const hangleLogout = () => {
        auth.logout()

        // after logout, redirect the user to Home Page
        navigate('/')
    }

    return (
        <div>
            Welcome {auth.user}

            {/* logout button added */}
            <button onClick={hangleLogout}>Logout</button>
        </div>
    )
}