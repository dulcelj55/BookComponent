import Book from "./Components/Book";
import "./index.css";
import { useState } from "react";


 function App() {
  const [firstbook, setFirstBook] = useState({
    title: "To Kill a Mockingbird",
    author: "Harper Lee"
  });
  const [books, setBooks] = useState([ 
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
      { title: "1984", author: "George Orwell" },
      { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
      { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez" } ])




  return (
    <div className="App">
      {/* <Book firstbook={firstbook} book={books} /> */}
      
        {
          books.map((book) => {
            return(
            <Book book={book} />
            )
          })
        }
    </div>
  );
}

export default App
