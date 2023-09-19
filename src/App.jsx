import Book from "./Components/Book";
import "./index.css";
import { useState } from "react";

const [books, setBooks] = useState([ 
  { title: "To Kill a Mockingbird",
   author: "Harper Lee" },
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "One Hundred Years of Solitude", author: "Gabriel Garcia Marquez" } ])
 function App() {
  const [book, setBook] = useState({
    title: "To Kill a Mockingbird",
    author: "Harper Lee"
  });




  return (
    <div className="App">
      <Book book={book}/>
      
      <>
        {
          books.map((books)=>{
            return
             <p>"Title is:"{books.title}</p>
            <p>"Author is :" {books.author}</p>
            
          })
        }
      </>


    </div>
  );
}

export default App
