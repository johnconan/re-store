import React from 'react';
import BookstoreServiceConsumer from '../bookstore-services-context';

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    <BookstoreServiceConsumer>
      {
        (bookstoreService) => {
          return (
            <Wrapped 
                {...props} 
                bookstoreService={bookstoreService}/>
          );
        }
      }
    </BookstoreServiceConsumer>
  }
}

export default withBookstoreService;