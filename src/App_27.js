import './App_27.css';

const firstBook = {
  img: 'https://m.media-amazon.com/images/I/81sPxEFSNLL._AC_UL480_FMwebp_QL65_.jpg',
  title: 'Baseball Biographies for Kids: The Greatest Players from the 1960s to Today',
  author: 'Dean Burrell'
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/41cDUhoyuGL._SX311_BO1,204,203,200_.jpg',
  title: 'The Beach House',
  author: 'Rachel Hanna '
}

const thirdBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51SvW9k0+RL._SX329_BO1,204,203,200_.jpg',
  title: 'The Paper Palace: A Novel',
  author: ' Miranda Cowley Heller '
}


const App_27 = () => {
  return (
    <section className='booklist'>
      <Book_27 img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book_27 img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
      <Book_27 img={thirdBook.img} title={thirdBook.title} author={thirdBook.author}/>
      {/* <Book_27 />
      <Book_27 />
      <Book_27 />
      <Book_27 />
      <Book_27 /> */}
    </section>
  );
}

const Book_27 = ({img, title, author}) => {

  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}


export default App_27;
