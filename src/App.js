import PostList from "./components/PostList";

function App() {
  return (
    <div className="main-column">
      <h1>Spacestagram</h1>
      <p>Brought to you by Nasa's image API 🌌</p>
      <br />
      <PostList />
    </div>
  );
}

export default App;
