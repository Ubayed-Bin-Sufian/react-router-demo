// useSearchParams is used to filter out different objects in webpages
import { Outlet, useSearchParams } from "react-router-dom"

export const Users = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active'

    return (
        <>
            <div>
                <h2>User 1</h2>
                <h2>User 2</h2>
                <h2>User 3</h2>
            </div>
            <Outlet />
            <div>
                <button onClick={() => setSearchParams({ filter: 'active'})}>Active Users</button>
                <button onClick={() => setSearchParams({})}>Reset Filters</button>
            </div>
            {
                showActiveUsers ? (
                    <h2>Show active users</h2>
                ) : (
                    <h2>Showing all users</h2>
                )
            }
        </>
    )
}