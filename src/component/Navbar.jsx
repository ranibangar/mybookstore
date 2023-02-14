import React,{useEffect, useState} from 'react';
import "../App";
import {Link} from 'react-router-dom';
import axios from 'axios';

const Navbar =() => {
    // const [loading,setLoading] = useState(false);
    // const [posts,setPosts] = useState([]);
    // const [searchTitle, setSearchTitle] = useState("");

    // useEffect(()=>{
    //     const loadPosts =async ( )=> {
    //         setLoading(true);
    //         const response = await axios.get(
    //             "https://example-data.draftbit.com/books?_limit=50"
    //             );
    //         setPosts(response.data)    
    //         setLoading(false);
    //     };

    //     loadPosts();
    // },[]);
 return(

        <div className='navbar'>
            <div>
            <Link to ="/">
                <h1>Bookly</h1>
                </Link>
            </div>
            <div className='search_Container'>
                 <input className='Search_Bar' id="searchInput" 
                 type="text" 
                 placeholder="Search Here..."
                //   onChange={(e) => setSearchTitle(e.target.value)}
                  /> 
            {/* {loading ? (
            <h4>Loading...</h4>
            ): (
                posts
                .filter((value) => {
                    if(searchTitle === ""){
                        return value
                    }else if (
                        value.title.toLowerCase().includes(searchTitle.toLowerCase())
                    ){
                        return value;
                    }
                })
                    .map((item) => <h5 key={item.id}>{item.title}</h5>)
            )} */}
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
