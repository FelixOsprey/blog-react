import { useRoutes } from "react-router";
import "./App.css";
import Blog from "./pages/Blog";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";

function App() {
  // Define page routes with react-router.
  const routes = useRoutes([
    // Route for the blog
    { path: "/", element: <Blog /> },
    // Route for the contact page
    { path: "/contact", element: <Contact /> },
    // Route for enkeltvisning
    // { path: "/post/:id", element: <SinglePost /> },
  ]);

  return (
    // My components
    <div className="app">
      <Navigation />
      {/* Render the current page based on the route */}
      <main>{routes}</main>
      <Footer />
    </div>
  );
}

export default App;
