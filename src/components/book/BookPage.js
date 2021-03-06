import React from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import {NavLink} from 'react-router-dom';
import * as bookActions from '../../actions/bookActions';
import AppBis from '../AppBis';

class Book extends React.Component{
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
  }

  submitBook(input){
    this.props.createBook(input);
  }

  render(){
    // let titleInput;
    return(
      <div className="row">
        <div className="col-md-6">
          <h3>Books</h3>
          <div class="search-container">
              <center> <form action="/books" >
               <input type="text" placeholder="Search.." name="search"/>
             <button type="submit"><i class="fa fa-fw fa-search"></i></button>
             </form></center>
           </div>
          <table className="table">
            <thead>
              <th>
                <td>Title</td>
                <td></td>
              </th>
            </thead>
            <tbody>
            {this.props.books.map((b, i) =>  {
              return(
                <tr key={i}>
              <td>{b.title}</td>
              <td><NavLink to={`/books/${b.id}`}>View</NavLink></td>
            </tr>
             )
            })}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <h3>New Book</h3>
          {/* Import and inject Book form */}
         <BookForm submitBook={this.submitBook.bind(this)} />
        </div>
      </div>
    )
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    books: state.books
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    createBook: book => dispatch(bookActions.createBook(book))
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(Book);