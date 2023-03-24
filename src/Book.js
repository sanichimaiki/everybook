import './Book.css';
import cover from './the_last_wish.jpg';

function Book({ book, onClick }) {
    return (
        <div 
            className='Book'
            onClick={ onClick }
        >
            {/* <p>{ book.title }</p> */}
            <img src={ book.cover } alt={ book.title } height="250px" width="166px" />
        </div>
    );
}

export default Book;