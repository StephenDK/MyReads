import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookDisplay from './BookDisplay';

class SearchBooks extends Component {
    state = {
        query: ''
    }

    // This method upates the state when user enters input
    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }

    clearQuery = () =>{
        this.updateQuery('')
    }

    render() {
        console.log(this.props)

        // Destructure the state and props
        const { query } = this.state;

        const { books } = this.props

        // Filter the books and save either all the books 
        // or the filtered books array to a variable
        const showingBooks = query === ''
            ? books
            : books.filter((c) => (
                c.title.toLowerCase().includes(query.toLowerCase())
            ))
        
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <div className="search-books-input-wrapper">
                            {/*
                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                            */}
                            <input type="text"
                                placeholder="Search by title or author"
                                value={this.state.query}
                                onChange={(event) => this.updateQuery(event.target.value)}
                                />
                        </div>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className="search-books-results">
                        <BookDisplay 
                            books={showingBooks}
                            currentlyRead={this.props.currentlyRead}
                            addToRead={this.props.addToRead}
                            wantToRead={this.props.wantToRead}
                        />
                    </div>
                    {/* This is for the showing how many books are left and clearing the query */}
                    <div>
                        {showingBooks.length !== books.length && (
                            <div>
                                <span>Now Showing {showingBooks.length} of {books.length}</span>
                                <button onClick={() => this.clearQuery()}>Clear</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBooks;