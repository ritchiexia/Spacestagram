import PostList from "./components/PostList";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="main-column">
        <h1>Spacestagram</h1>
        <p>Brought to you by Nasa's image API 🌌</p>
        <br />
        <Navbar />
        <Routes>
          <Route path="/" element={<PostList parameters={{ start_date: "2022-01-08" }}/>} />
          <Route path="/random" element={<PostList parameters={{ count: 3 }} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
