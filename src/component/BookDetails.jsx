import React,{useEffect, useState} from 'react';
import "../App";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BOOk_URL } from '../API';

const BookDetails = () => {

  const [ book, setBooks] = useState();
  
  const { id } = useParams();

useEffect(()=> {
  axios
  .get('${BOOk_URL}/${id}')
  .then((res) => {
     setBooks(res.data);
  }).catch(err=>console.log(err))
},[id]);

  return <div className='book-details'>
    <div>
      <h2>{book?.title}</h2>
      <img src={book?.image_url} alt="#" />
    </div>
    <div>
      <h2>Descriptionr</h2>
      <p>{book?.description}</p>
      <h2>Authors</h2>
      <p>{book?.authors}</p>
      <h2>Genres</h2>
      <p>{book?.genres}</p>
    </div>
    </div>;
};
export default BookDetails;

