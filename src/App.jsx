import { useRoutes } from "react-router";
import "./App.css";

function App() {
  // Define page routes with react-router.
  const routes = useRoutes([
    // Route for the blog
    { path: "/", element: <Blog /> },
    // Route for the contact page
    { path: "/contact", element: <Contact /> },
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
