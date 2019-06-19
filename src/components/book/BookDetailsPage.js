import React, {PropTypes, book, addToCart} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BookDetails from './BookDetails';
import * as bookActions from '../../actions/bookActions';


{/* <BookDetails book={this.props.book}/>; */}

class BookDetailsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        addToCart(book) 
            const item = {
              title: book.title,
              price: book.price
            };
            this.props.addToCart(item);

    }

   
    render() {
        return (

            <div>
                <h1>Book Details Page</h1>
                <BookDetails />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      book: state.book
    };
};
// Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
      // This dispatch will trigger 
      // the Ajax request we setup
      // in our actions
      fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId)),
      componentDidMount(){
        this.props.fetchBookById(this.props.params.id);
     }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);