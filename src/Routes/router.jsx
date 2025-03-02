import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import App from "../App";
import Product from "../pages/Product";
import Contact from "../pages/Contact";
import About from "../pages/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />  

            },
            {
                path: 'product',
                element: <Product />
            },
            {
                path: 'contact',
                element: <Contact />
            },{
                path: 'about',
                element: <About />
            }
        ]

    }
]);

export default router;