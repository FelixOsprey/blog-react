import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";

const SinglePost = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  const apiUrl = `https://www.googleapis.com/books/v1/volumes/${id}`;
  const apiKey = "AIzaSyDqF3LU7wo913WzqXZ_KKvgIJXsW46fw6k";

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`${apiUrl}?key=${apiKey}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBook();
  }, [id]);

  if (!book) return <p>Loading post...</p>;

  return (
    <article className={styles.singlePostPage}>
      <h1>{book.volumeInfo.title}</h1>
      <p>{book.volumeInfo.authors?.join(", ")}</p>
      <img
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt={book.volumeInfo.title}
        className={styles.bookImage}
      />
      <p>{book.volumeInfo.description}</p>
      <Link to="/" className={styles.readButton}>
        Tilbage til oversigt
      </Link>
    </article>
  );
};

export default SinglePost;
