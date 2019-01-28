import React, { Component } from 'react';
import BookDisplay from './BookDisplay';

class MyBookShelf extends Component {
    
    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
            <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>
                <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {/* We will use the BookDisplay component here to display the books */}
                        <BookDisplay 
                            books={this.props.currentlyReading}
                        />
                    </ol>
                </div>
                </div>
                <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {/* Use the bookdisplay component to render the want to read books */}
                        <BookDisplay 
                            books={this.props.wantToRead}
                        />
                    </ol>
                </div>
                </div>
                <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                    {/* Use the bookdisplay component to render the already read books */}
                        <BookDisplay 
                            books={this.props.read}
                        />
                    
                    </ol>
                </div>
                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default MyBookShelf;