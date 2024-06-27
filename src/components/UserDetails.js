// import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom"

export const UserDetails = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // const params = useParams()
    // const userID = params.userID
    const {userID} = useParams();
    console.log(userID)
    
    // useEffect(() => {
    //     // Perform data fetching based on productId
    //   }, [userID]);

    return (
        <>
            <div>
                Details about users {userID}
            </div>
            <button onClick={() => setSearchParams({ filter: 'active'})}>Active Users</button>
            <button onClick={() => setSearchParams({})}>Reset Filters</button>
        </>
    )
}