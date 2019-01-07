import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Info from "./Info";
import Products from "./Products";


const App = () => (
    <div className="page-wrapper">
        <Header />
        <Info />
        <Products />
        <Footer />
    </div>
)

export default App;