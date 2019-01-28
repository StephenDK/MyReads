import React from 'react';
import BookShelfChanger from './bookShelfChanger';


const BookDisplay = (props) => {

    console.log(props)
    return (
        <div className='bookshelf-books'>
            <ol className='books-grid'>
                {props.books.map((book) => (
                    <li key={book.id} className=''>
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")`}}></div>
                        <BookShelfChanger 
                            book={book}
                            currentlyRead={props.currentlyRead}
                            addToRead={props.addToRead}
                        />
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.author}</div>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default BookDisplay;