import { NavLink } from "react-router-dom"
export default function NotFound() {
    return (
        <div className="text-center p-8">
            <p className="text-3xl font-light m-8">The page you are looking for was not found</p>
            <NavLink to="/" className="p-2 m-8 rounded-lg shadow-md bg-zinc-50">Go back to the main page</NavLink>
        </div>
    )
}