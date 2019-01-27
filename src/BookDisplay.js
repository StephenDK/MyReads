import React from 'react';



const BookDisplay = (props) => {


    return (
        <div className='bookshelf-books'>
            <ol className='books-grid'>
                {props.books.map((book) => (
                    <li key={book.id} className=''>
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")`}}></div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.author}</div>
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default BookDisplay;