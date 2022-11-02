import React from "react";
import Book_27 from "../components/w02-booklist/Book_27";
import { booklist_data } from "../booklist_data";

const BooklistPage_27 = () => {
    return (
      <section className='booklist'>
        {booklist_data.map( (book, index) => {
          const {id, img, title, author} = book;
           return <Book_27 key={id} img={img} title={title} author={author}/>;
        })}
      </section>
    );
  };

export default BooklistPage_27;