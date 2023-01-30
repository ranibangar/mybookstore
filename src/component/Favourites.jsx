import React from 'react';
import "../App";
import { useAppContext} from './context/appContext';


const Favourites =() => {
 
const {favourites,addToFavourites,removeFromFavourites} = useAppContext();

console.log('favourites are', favourites);

const favouritesChecker = (id) =>{
    const boolean = favourites.some((book)=>book.id === id);
    return boolean;
};

    return(

            <div className='favourites'>
                 {favourites.length > 0 ? (
                    favourites.map((book)=>(
                   <div key={book.id} className="book">
                    <div>
                        <h5>{book.title}</h5>
                        </div>
                    <div>
                        <img src={book.image_url} alt="#"/>
                    </div>
                    <div>
                        {favouritesChecker(book.id) ? (
                         <button className='button' onClick={()=> removeFromFavourites(book.id)}>
                         Remove From Favourites
                     </button>
                      ) :(
                        <button className='button' onClick={()=> addToFavourites(book)}>
                            Add to Favourites
                        </button>
                      ) }
                        
                     </div>
                   </div> 
                ))
                ):(<h1>Ypu don't have any favourite books yet!!! </h1>
            )}
            </div>
          

    );
};
export default Favourites;
