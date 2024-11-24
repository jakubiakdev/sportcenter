import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import { lazy, useState } from 'react';
import './index.css';
import Root from './routes/root';
import Home from './routes/home';
import { LoginContext } from './LoginContext';
import NotFound from "./routes/notfound";
import Products from './routes/products' 
const About = lazy(() => import('./routes/about'))
const Login = lazy(() => import('./routes/login'))
const Buy = lazy(() => import('./routes/buy'))
const ProductList = lazy(() => import('./components/ProductList'))
const ProductDetails = lazy(() => import('./components/ProductDetails'))

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="" element={<Home />} />
            <Route path="products" element={<Products />}>
                {/* TODO: switch to parameter for everything  */}
                <Route path=':category/:id' element={<ProductDetails />}/>
                <Route path="basketball" element={<ProductList category="basketball" />} />
                <Route path="tennis" element={<ProductList category="tennis" />} />
                <Route path="soccer" element={<ProductList category="soccer" />} />
                <Route path="running" element={<ProductList category="running" />} />
            </Route>
            <Route path="about" element={<About />} />
            <Route path="buy/:id" element={<Buy />} />
            <Route path="login" element={<Login/>} />
            <Route path="*" element={<NotFound/>} />
        </Route>
    )
);

export default function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    function login() {
        setLoggedIn(true);
    }
    function logout() {
        setLoggedIn(false);
    }
    return (
        <LoginContext.Provider value={{ loggedIn, login, logout }} >
            <RouterProvider router={router} />
        </LoginContext.Provider>
    )
}