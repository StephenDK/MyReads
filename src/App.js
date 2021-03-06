import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import MyBookShelf from './MyBookShelf';
import SearchBooks from './SearchBooks';


// The App component will control the data in the application
// It will fetch the data from the back end and store in application state
// The app component will also control the route in our application
// The first route will be the MyBookShelf component
// The second route will be the SearchBooks component

// Test component
// const test = () => (
//   <div>
//     My Reads
//   </div>
// )

class BooksApp extends React.Component {
  
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

  // lifecycle event that fetches all books from back-end server
  // and store books in application state
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  // These methods below controll adding a book to currently reading and read
  addCurrentlyRead = (book) => {
    this.setState((currentState) => ({
      currentlyReading: currentState.currentlyReading.concat(book)
    }))
  }

  addToRead = (book) => {
    this.setState((currentState) => ({
      read: currentState.read.concat(book)
    }))
  }

  wantToRead = (book) => {
    this.setState((currentState) => ({
      wantToRead: currentState.wantToRead.concat(book)
    }))
  }

  render() {
    // console.log(this.state.books);
    return (
      <div className="app">
      {/* This route will be for the mybookshelf component which is "/" */}
      <Route exact path='/' render={() => (
        <MyBookShelf 
          currentlyReading={this.state.currentlyReading}
          alreadyRead={this.state.read}
          wantToRead={this.state.wantToRead}
          read={this.state.read}
        />
      )} />

      {/* This will be the route for search books component "/search" 
          For the search books component we will pass all the books from application state*/}
        <Route exact path='/search' render={() => (
          <SearchBooks 
            books={this.state.books}
            currentlyRead={this.addCurrentlyRead}
            addToRead={this.addToRead}
            wantToRead={this.wantToRead}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
