import React from 'react';
import "./App.css";
import {Routes,Route} from "react-router-dom";
import BookList from './component/BookList';
import BookDetails from './component/BookDetails';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Favourites from './component/Favourites';


function App(){
    
    return(
 <div className='App'>
    <Navbar/>
<Routes>
    <Route path="/" element={<BookList />} />
    <Route path="/book/:id" element={<BookDetails />} />
    <Route path="/favourites" element={<Favourites />} />
</Routes>
<Footer />
 </div>
    );
};
export default App;
