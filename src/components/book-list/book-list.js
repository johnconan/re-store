import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { fetchBooks } from '../../actions';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner/>
    }

    if (error) {
      return <ErrorIndicator/>
    }

    return <BookList books={books}/>

  }
}

const BookList = ({ books }) => {
  return (
    <ul className="book-list">
      {
        books.map(book => {
          return (
            <li className="book-list-item-bg" key={book.id}>
              <BookListItem book={book}/>
            </li>
          );
        })
      }
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch)
  }
}

export default withBookstoreService()(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));
