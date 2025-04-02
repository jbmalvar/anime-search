import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [mangaList, setMangaList] = useState([]);

  useEffect(() => {
    const fetchMangaData = async () => {
      const response = await fetch(
        "https://api.jikan.moe/v4/manga"
      );
      const json = await response.json();
      setMangaList(json.data);
    };

    fetchMangaData().catch(console.error);
  }
  , []);

  return (
    <>
      <div className="App">
        <div className = "mangaSearch">
          <h1>📖 Manga Search</h1>
          <div className = "Manga"></div>
        </div>
        <div className = "MangaSearchContainer">
          <div className = "Categories">
            <h1>
              Mangas
              <span className = "buttons">
                <button className = "button">Prev 25</button>
                <button className = "button">Next 25</button>
              </span>
            </h1>
            <div className = "CollectiveInfo">
              <div className="infoBox">Highest Rated: {}</div>
              <div className="infoBox">Average Score: {}</div>
              <div className="infoBox">Number Completed: {}</div>
            </div>
            <h2 className = "searchHeader">Search:
              <input className = "searchInput"></input>
              <button className = "searchButton">Search</button>
            </h2>
            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="table">
              <thead>
                <tr class = "header">
                  <td class = "rankHeader">Rank</td>
                  <td class = "titleHeader">Title</td>
                  <td class = "scoreHeader">Score</td>
                  <td class = "authorHeader">Author</td>
                  <td class = "statusHeader">Status</td>
                </tr>
              </thead>
              <tbody>
                {mangaList.map((manga, index) => (
                  <tr key={manga.mal_id}>
                    <td>{index + 1}</td>
                    <td>{manga.title}</td>
                    <td>{manga.score || 'N/A'}</td>
                    <td>{manga.authors?.[0]?.name || 'Unknown'}</td>
                    <td>{manga.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;