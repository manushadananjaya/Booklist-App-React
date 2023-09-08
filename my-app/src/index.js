import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const firstBook = {
  author: "author",
  title: "Title of the book",
  img: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SX184_.jpg",
};
const secondBook = {
  author: "author2",
  title: "Title of the book2",
  img: "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SX184_.jpg",
};

const Booklist = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = ({img, title, author, }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4> {author}</h4>
      
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Booklist />);


