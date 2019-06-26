import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

const More = () => {
    return (
            <div>
                <h1>The 10 best independent bookshop in the world-readers recommend</h1>
                
         <img src="book.jpeg" alt="bookshop" width="800" height="400"></img><br></br><br></br>
      

         <center><a href="https://www.theguardian.com/books/booksblog/2015/jun/19/the-10-best-independent-bookshops-in-the-world-readers-recommend" class="myButton">see more</a></center>
       
         <h2>Social Follow</h2><br></br>
            <a
             href="https://www.youtube.com/channel/UCRRmvD-jSsjzbFKgNRXktOQ?view_as=subscriber"
             className="youtube social"
             >
           <FontAwesomeIcon icon={faYoutube} size="2x" />
           </a>



            <a
             href="https://www.facebook.com/profile.php?id=100009828761219/"
             className="facebook social"
             >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
           </a>



            <a href="https://twitter.com/Germila2?s=09" className="twitter social">
           <FontAwesomeIcon icon={faTwitter} size="2x" />
           </a>


           <a
            href="https://www.instagram.com/saintjeangermila/"
            className="instagram social"
            >
           <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>

            <div>
                
     <footer> 
    <p>Contact information: <a href="mailto:stjngermili@gmail.com">stjngermili@gmail.com</a>.</p></footer>
 </div>

          </div>
    
    );
  };
  
  export default More;