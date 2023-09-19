import BookAuthor from '../BookAuthor'
import BookName from '../BookName'
import './index.css'

const Book = ({book}) => {
  return (
    
    <div id="book">
        
        {/* <h3>Promt Easy</h3>
        <h3>Title of Book: {firstbook.title}</h3>
        <h3>Author of Book: {firstbook.author}</h3> */}

        {/* <h3>Promt Medium</h3>
    
        <BookAuthor  books={books} firstbook={firstbook}/>
        <BookName  books={books} firstbook={firstbook}/> */}

        <h3>Promt Advance</h3>
        <BookAuthor  book={book} />
        <BookName  book={book} />

    

  </div>
  )
}

export default Book