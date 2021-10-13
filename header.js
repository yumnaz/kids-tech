import react from 'react';
import './header.css';
import BasicButtons from './BasicButtons';
import logo from './logo.png';


console.log(logo); // /logo.84287d09.png

function Header() {
    return (
        <div className="header">

            {/* <logo/> */}         
            <img src={logo} alt="Logo" height="50px" style={{alignItems: "center"}} />            
            {/* <img src="logo.png" className="logo" /> */}
            <div className="spacer"/>
            {/* <h1>SFPOPOS</h1> */}

            <BasicButtons/>                         
        </div>       
    );
  }
  
  export default Header;