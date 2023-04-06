import React from "react";
import logoImg from './logo.png'
import './Header.css'



class Header extends React.Component{

    render(){
        return (
            <div className="Header">
                <img className="Header-logo" src={logoImg}/>
            </div>
        )
    }
}

export default Header