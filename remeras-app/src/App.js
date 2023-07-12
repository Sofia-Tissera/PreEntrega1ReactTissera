import React from "react";
import LandingPage from "./components/LandingPage";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
    return ( <
        div >
        <
        NavBar / >
        <
        LandingPage / >
        <
        ItemListContainer greeting = "¡Bienvenido a Tienda Noventosa!" / >
        <
        /div>
    );
};

export default App;