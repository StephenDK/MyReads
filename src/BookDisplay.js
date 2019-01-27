import React from 'react';



const BookDisplay = (props) => {


    return (
        <div className='bookshelf-books'>
            <ol className='books-grid'>
                {props.books.map((book) => (
                    <li key={book.id} className=''>
                        <div>
                            
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    )
}