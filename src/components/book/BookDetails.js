import React from 'react';


const BookDetails = ({book, addToCart}) => { 
    return (
      <div className="media">
        <div className="media-left">
          {/* <a href="#"> */}
         <img className="media-object" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZCVpFy43R-HLc2oSrtSn5b-PxiZLjA5aokaOtyXfgTjCEWJj" alt="im"  width="200"/>
          {/* </a> */}
        </div>
        <div className="media-body">
        <h4 className="media-heading">{book.title}</h4>
          <ul>
        
            <li><stron>Author: </stron>{book.author}</li><br></br><br></br>
            <li><stron>Price: </stron> ${book.price}</li><br></br><br></br>
             <li><stron>Year: </stron>{book.year}</li><br></br><br></br><br/>
             <button className="btn btn-primary" onClick={e => {
              addToCart(book);
              alert("Your Request is accepted");
            }}>Buy</button>
          </ul>
        </div>
      </div>
    );
};


export default BookDetails;