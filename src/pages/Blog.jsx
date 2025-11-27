import { useEffect, useState } from "react";
import BlogPost from "./../components/BlogPost";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  const [books, setBooks] = useState([]);

  const apiUrl =
    "https://www.googleapis.com/books/v1/volumes?q=react+programming"; // Correct API URL for Google Books
  const apiKey = "AIzaSyDqF3LU7wo913WzqXZ_KKvgIJXsW46fw6k"; // Your API Key

  const fetchBooks = async () => {
    try {
      // Corrected fetch request
      const response = await fetch(`${apiUrl}&key=${apiKey}`); // Append API key in the URL
      console.log(response);

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json(); // Parse the JSON <fresponse
      console.log(data);

      // Assuming the data has an "items" array that contains the  ooks
      setBooks(data.items); // Set books in state

      const book = books.filter((book) => book.id === "CSj5DwAAQBAJ");
      console.log(book);
    } catch (error) {
      console.log(error); // Log any errors
    }
  };

  // Indbygget hook fra React der sørger for, at funktionen kun køre én gang når komponenten renderes/mountes.
  useEffect(() => {
    fetchBooks(); // Call fetchBooks when the component mounts
  }, []); // Empty dependency array to call it only once when the component mounts

  return (
    <article className={styles.container}>
      {/* LEFT SIDE */}
      <section className={styles.left}>
        <h1>Blog Posts</h1>
        <BlogPost />
      </section>

      {/* RIGHT SIDE */}
      <section className={styles.right}>
        <h1>Featured Book</h1>
        {books.length > 0 ? (
          <div className={styles.bookCard}>
            <h2>{books[0].volumeInfo.title}</h2>
            <p>{books[0].volumeInfo.authors?.join(", ")}</p>
            <img
              src={books[0].volumeInfo.imageLinks?.thumbnail}
              alt={books[0].volumeInfo.title}
              className={styles.bookImage}
            />
            <p className={styles.description}>
              {books[0].volumeInfo.description}
            </p>
          </div>
        ) : (
          <p>Loading book...</p>
        )}
      </section>
    </article>
  );
};

export default Blog;
