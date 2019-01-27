import React from 'react'
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks';

const test = () => (
  <div>
    Search Page
  </div>
)

class BooksApp extends React.Component {
  
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

  

  render() {
    // console.log(this.state.books);
    return (
      <div className="app">
      {/* This route will be for the mybookshelf component which is / */}
      <Route exact path='/' component={test} />

      {/* This will be the route for search books component */}
        <Route exact path='/search' render={() => (
          <SearchBooks 
              
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
