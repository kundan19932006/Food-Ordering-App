import React from "react";
import ReactDOM from "react-dom/client";
const AppLayout=()=>{
    return(<div className="app">
        <Header/>
    </div>);
};
const Header=()=>{
    return(
    <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Ffood-cart-logo&psig=AOvVaw22Q1gqJozCIfRNJpFXOUbu&ust=1725198907310000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPD5t4Wxn4gDFQAAAAAdAAAAABAE"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us </li>
                <li>cart</li>
            </ul>
        </div>
    </div>
)};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);