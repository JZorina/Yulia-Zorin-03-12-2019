import React from 'react';
import Menu from './Menu';
import Toggles from '../Toggles/Toggles';

const Header =()=>{
    return(
        <div className="ui container">
            <div className="ui header" style={headerTitle}>
                Herolo Weather Task
            </div>
            <Menu/>
            <Toggles/>
        </div>
    )
} 

const headerTitle={
    paddingTop:"30px",
    margin: "0 auto",
    display: "block",
    fontFamily:"Alatsi, sans-serif",
    fontSize:"20px"
}
export default Header;