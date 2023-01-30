import React from 'react';
import "../App";
import {Link} from 'react-router-dom';

const Navbar =() => {
 return(

        <div className='navbar'>
            <div>
                <h1>BOOKLY</h1>
            </div>
            <div> 
                <Link to ="Favourites">
                    <h4>My Favourites</h4> 
                </Link>
            </div>
           </div>
        
    );
};
export default Navbar;
