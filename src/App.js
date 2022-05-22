import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import NewPost from "./components/NewPost";
import PostDetails from "./components/PostDetails";
import Error from "./components/Error";

import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="post" element={<NewPost />} />
        <Route path="post/:id" element={<PostDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
