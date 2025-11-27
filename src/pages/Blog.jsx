import { useEffect, useState } from "react";
import { Link } from "react-router";
import BlogPost from "./../components/BlogPost";
import styles from "../styles/Blog.module.css";

const Blog = () => {
  const [books, setBooks] = useState([]);

  const apiUrl = "https://www.googleapis.com/books/v1/volumes?q=fiction";
  const apiKey = "AIzaSyDqF3LU7wo913WzqXZ_KKvgIJXsW46fw6k";

  const fetchBooks = async () => {
    try {
      const response = await fetch(`${apiUrl}&key=${apiKey}`);
      if (!response.ok) throw new Error("Failed to fetch");

      const data = await response.json();
      setBooks(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <article className={styles.container}>
      {/* LEFT SIDE */}
      <section className={styles.left}>
        <h1>Blog Posts</h1>
        <BlogPost />
        <Link
          to={`/blog/${books[0]?.id || "default"}`}
          className={styles.readButton}
        >
          Læs indlæg
        </Link>
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
