import React,{useState,useEffect} from 'react';
import "../App";
import { API_URL } from '../API';
import axios from 'axios';
import { useAppContext} from './context/appContext';
import { useNavigate } from 'react-router-dom';

const BookList =() => {

    const [books,setBooks] = useState([]);

const {favourites,addToFavourites,removeFromFavourites} = useAppContext();

const navigate = useNavigate();
const favouritesChecker = (id) =>{
    const boolean = favourites.some((book)=>book.id === id);
    return boolean;
};

    useEffect(()=> {
axios
.get(API_URL)
.then(res=> {
    console.log(res.data)
    setBooks(res.data)
})
.catch((err)=>console.log(err));
    },[]);

    return(

            <div className='book-list'>
                {books.map((book)=>(
                   <div key={book.id} className="book">
                    <div>
                        <h5>{book.title}</h5>
                        </div>
                    <div>
                        <img src={book.image_url} 
                        alt="#" 
                        onClick={()=>navigate('/books/${book.id}')}/>
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
                ))}
            </div>
          );
};
export default BookList;
