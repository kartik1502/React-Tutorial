
import './Content.css'
import axios from 'axios'

function Content() {
  
  const getMovies = () => {
      const response = axios.get("https://api.themoviedb.org/3/movie/top_rated" ,{
        params: {
          api_key : "8eff6f1c66dfa3283d878588d6ab6ff3"
        }
      })
  }
}
//
export default Content;
