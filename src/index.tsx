import React, { useState } from "react";
import ReactDOM from "react-dom";

type FormElement = React.FormEvent<HTMLFormElement>;

interface IBook {
  text: string;
  complete: boolean;
}

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>("");
  const [books, setBooks] = useState<IBook[]>([]);

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();

    addBook(value);
    setValue("");
  };

  const addBook = (text: string): void => {
    const newBooks: IBook[] = [...books, { text: text, complete: false }];
    setBooks(newBooks);
  };

  const completeBook = (index: number): void => {
    const newBooks: IBook[] = [...books];
    newBooks[index].complete = !newBooks[index].complete;
    setBooks(newBooks);
  };

  const deleteBook = (index: number): void => {
    const newBooks: IBook[] = [...books];
    newBooks.filter((book) => {
      if (book.complete) {
        newBooks.splice(index, 1);
      }
    });
    setBooks(newBooks);
  };

  return (
    <>
      <h1>Book List App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add book!"
          required
        />
        <button type="submit">Add Book</button>
      </form>

      <section>
        {books.map((book: IBook, index: number) => (
          <ul key={index}>
            <li style={{ textDecoration: book.complete ? "line-through" : "" }}>
              {book.text}{" "}
              <button type="button" onClick={() => completeBook(index)}>
                {book.complete ? "Incomplete" : "Complete"}
              </button>
              <button type="button" onClick={() => deleteBook(index)}>
                Delete
              </button>
            </li>
          </ul>
        ))}
      </section>
    </>
  );
}

const root = document.getElementById("app-root");
ReactDOM.render(<App />, root);
