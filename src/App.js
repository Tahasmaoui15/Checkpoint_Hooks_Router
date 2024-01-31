import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import MovieList from './components/MovieList';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieList />
    </div>
  );
}

export default App;
