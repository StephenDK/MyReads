import React from 'react';


const bookShelfChanger = (props) => {
    console.log('bookShelfChanger book ', props)
    return (
        <div>
            
                <button
                onClick={() => props.currentlyRead(props.book)}
                >
                Currently Reading
                </button>
                <button 
                onClick={() => props.addToRead(props.book)}
                >
                Add to Read
                </button>
                
        </div>    
    )
}

export default bookShelfChanger;