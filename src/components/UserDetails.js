// import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
    // const params = useParams()
    // const userID = params.userID
    const {userID} = useParams();
    console.log(userID)
    
    // useEffect(() => {
    //     // Perform data fetching based on productId
    //   }, [userID]);

    return (      
        <div>
            Details about users {userID}
        </div>        
    )
}