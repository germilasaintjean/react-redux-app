import React, {PropTypes} from 'react';
import React, {componentDidMount} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BookDetails from './BookDetails'

class BookDetailsPage extends React.Component {
    constructor(props, context) {
        <BookDetails book={this.props.book}/>
        super(props, context);
    }

    addToCart(book){
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
        // state mappings here
        book: state.book
    };
};

//Map dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
        // this will trigger
        //the ajax request
        //in our actions
        fetchBookById: bookId => dispatch(bookActions.fetchBookById(bookId)),

        componentDidMount(){
            this.props.fetchBookById(this.props.params.id);
         }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailsPage);