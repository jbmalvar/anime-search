import { useState } from 'react'
import './App.css'

function App() {
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
                <button className = "button">Prev 50</button>
                <button className = "button">Next 50</button>
              </span>
            </h1>
            <h2 className = "SearchHeader">Search: 
              <input></input>
            </h2>
            <table border="0" cellpadding="0" cellspacing="0" width="100%" class="table">
              <tbody>
                <tr class = "header">
                  <td class = "rankHeader">Rank</td>
                  <td class = "titleHeader">Title</td>
                  <td class = "scoreHeader">Score</td>
                  <td class = "authorHeader">Author</td>
                  <td class = "statusHeader">Status</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;