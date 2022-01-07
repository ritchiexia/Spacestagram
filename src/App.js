
function App() {
  return (
    <div className="main-column">
      <h1>Spacestagram</h1>
      <p>Brought to you by Nasa's image API 🔭</p>
      <div className="post-cell">
        <img className="post-img" src="https://apod.nasa.gov/apod/image/2201/eclipse_EV.jpg" alt="test" />
        <div className="post-content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <b>2021-09-01</b>
          <p>A male Adelie penguin performed this Ecstatic Vocalization in silhouette during the December 4 solar eclipse, the final eclipse of 2021. Of course his Ecstatic Vocalization is a special display that male penguins use to claim their territory and advertise their condition. This penguin's territory, at Cape Crozier Antarctica, is located in one of the largest Adelie penguin colonies. The colony has been studied by researchers for over 25 years. From there, last December's eclipse was about 80 percent total when seen at its maximum phase as the Moon's shadow crossed planet Earth's southernmost continent.   Status Updates: Deploying the James Webb Space Telescope</p>
          <button>Like</button>
        </div>
      </div>
      <div className="post-cell">
        <img className="post-img" src="https://apod.nasa.gov/apod/image/2201/eclipse_EV.jpg" alt="test" />
        <div className="post-content">
          <h3>Lorem ipsum dolor sit amet</h3>
          <b>2021-09-01</b>
          <p>A male Adelie penguin performed this Ecstatic Vocalization in silhouette during the December 4 solar eclipse, the final eclipse of 2021. Of course his Ecstatic Vocalization is a special display that male penguins use to claim their territory and advertise their condition. This penguin's territory, at Cape Crozier Antarctica, is located in one of the largest Adelie penguin colonies. The colony has been studied by researchers for over 25 years. From there, last December's eclipse was about 80 percent total when seen at its maximum phase as the Moon's shadow crossed planet Earth's southernmost continent.   Status Updates: Deploying the James Webb Space Telescope</p>
          <button>Like</button>
        </div>
      </div>
    </div>
  );
}

export default App;
