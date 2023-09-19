import BookAuthor from '../BookAuthor'
import BookName from '../BookName'
import './index.css'

const Book = ({book}) => {
  return (
    <div id="book">
    <h3>Title of Book: {book.title}</h3>
    <h3>Author of Book: {book.author}</h3>
    
    <BookAuthor  book= {book}/>
    <BookName   book={book}/>
    

  </div>
  )
}

export default Book