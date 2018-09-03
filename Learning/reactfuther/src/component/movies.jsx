import React ,{Component} from 'react';
import {getMovies} from '../services/fakeMovieService';
export default class Movies extends Component{
    state = {
        movies : getMovies()
    };
    handleDelete = (movie) => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies : movies});
    };
    render(){
        const {length : count} = this.state.movies;
        if(count === 0)
            return <p>There are no Movie in the database</p>
        return(
            //Zen Coding 
            <React.Fragment>
            <p>There are {count} Movie in the database</p>
          <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Generic</th>
                    <th scope="col">Stocks</th>
                    <th scope="col">Rate</th>
                    </tr>
                </thead>
                <tbody>
                  {this.state.movies.map(movie => (
                    <tr key={movie._id}>
                        <td>{movie.title}</td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><button onClick={() => this.handleDelete(movie)} class="btn btn-danger">Delete</button></td>
                    </tr>
                  ))}
                </tbody>
          </table> 
          </React.Fragment>
        );
    }
}
