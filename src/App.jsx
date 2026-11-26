
import { useState, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import MovieEditor from './components/MovieEditor'
import MovieList from './components/MovieList'

const mockData = [
  {
    id: 0,
    isDone: true,
    content: "프로젝트 헤일메리",
    rating: 4.5,
    date: new Date().getTime()
  },
  {
    id: 1,
    isDone: true,
    content: "라라랜드",
    rating: 4.0,
    date: new Date().getTime()
  },
  {
    id: 2,
    isDone: false,
    content: "트루먼 쇼",
    rating: 5.0,
    date: new Date().getTime()
  },
]

function App() {

  const [movies, setMovies] = useState(mockData)
  const idRef = useRef(3)

  const onCreate =(content)=>{
    const newMovie = {
      id: idRef.current++,
      isDone: false,
      content: content,
      rating: 0,
      date: new Date().getTime()
    }
    setMovies([newMovie, ...movies])
  }

  const onUpdate =(targetId, updates)=>{
    setMovies((prev)=>
      prev.map((movie)=>
        movie.id === targetId
        ? {...movie, ...updates}
        : movie
      )
    )
  }

  const onDelete =(targetId)=>{
    setMovies((prev)=>
      prev.filter((movie)=>movie.id !== targetId)
    )
  }

  return (
    <div className='App'>
      <Header/>
      <MovieEditor onCreate={onCreate}/>
      <MovieList
        movies={movies}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />

    </div>
  )
}

export default App
