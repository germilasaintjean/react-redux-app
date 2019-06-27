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
             {/* <button className="btn btn-primary" onClick={e => {
              addToCart(book);
              alert("Your Request is accepted");
            }}>Buy</button> */}
             <a id="swfMailTo" class="a-link-normal email" title="Share via e-mail" href="mailto:?body=I%20would%20like%20to%20recommend%20this%20Book&amp;subject=I%20want%20to%20recommend%20this%20product%20on%20%20your BOOkShop%20"bookshop>Buy</a><br></br><br></br>
          <input id="add-to-cart-button" name="submit.add-to-cart" title="Add to Shopping Cart" data-hover="Select <b>__dims__</b> from the left<br> to add to Shopping Cart" class="a-button-input attach-dss-atc" type="button" value="Add to Cart" aria-labelledby="submit.add-to-cart-announce"></input>
          </ul>
        </div>
      </div>
    );
};


export default BookDetails;