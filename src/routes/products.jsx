import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

export default function Products() {
    const location = useLocation();
    const hasChildRoute = location.pathname !== '/products';

    return (
        <>
            <div className="text-center bg-fuchsia-700 text-zinc-50">
                <Navbar elements={[
                    { content: 'Basketball', url: '/products/basketball' },
                    { content: 'Tennis', url: '/products/tennis' },
                    { content: 'Soccer', url: '/products/soccer' },
                    { content: 'Running', url: '/products/running' },
                ]} />
            </div>
            {hasChildRoute ? <Outlet /> : <p className="bg-zinc-300 text-zinc-950 h-full text-center text-3xl font-light p-4">Please choose a category</p>}
        </>
    )
}