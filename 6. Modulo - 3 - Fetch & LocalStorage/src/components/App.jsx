import { useState, useEffect } from 'react'
import '../styles/app.css'

const App = () => {

  const [series, setSeries] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(
  // Aquí empieza la función
  () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData)
        setSeries(responseData);
      });
  }, [searchValue]
  // Aquí termina la función
);
  const handleChange = (ev) => {
      setSearchValue(ev.target.value);
    }

  return (
    <>

    <h1>Busca tus series favoritas</h1>
    <label htmlFor='name'>Busca por nombre:</label>
    <input
      name="name"
      id='name'
      value={searchValue}
      onChange={handleChange}
    />
      <h3>Personajes con el nombre: {}</h3>
    <ul>
      {series.map (serie => {
        return (
          <li key={serie.show.id}>{serie.show.name}</li>
        )
      })}
    </ul>
    </>
  )
}

export default App
