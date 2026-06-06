import React, { useContext } from "react";
import { AppContext } from "./context";

const Navbar = () => {
    const { amount } = useContext(AppContext);
    return (
        <nav style={{ backgroundColor: "#282c34", padding: "15px 30px", color: "white", display: "flex", justifyContent: "space-between" }}>
            <h3>useReducer</h3>
            <div style={{ position: "relative" }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="30px" fill="currentColor">
                    <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
                </svg>
                <div style={{ position: "absolute", top: "-5px", right: "-10px", backgroundColor: "#61dafb", color: "black", borderRadius: "50%", padding: "2px 7px", fontSize: "14px" }} id="nav-cart-item-count">
                    {amount}
                </div>
            </div>
        </nav>
    )
};

export default Navbar;