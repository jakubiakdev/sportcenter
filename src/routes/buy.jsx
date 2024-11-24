import { NavLink } from "react-router-dom";
import ProtectedPage from "../components/ProtectedPage";

export default function Buy() {
    return (
        <ProtectedPage>
            <p className="text-center text-xl p-5">Your very own purchase will be on your way shortly. Thank you for your purchase!</p>
            <div className="text-center">
            <NavLink to="/products" className="p-2 m-2 rounded-lg shadow-md bg-zinc-50">Check out other categories</NavLink>
            </div>
        </ProtectedPage>
    )
}