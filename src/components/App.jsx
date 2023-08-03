import  { Component } from "react";
import { Searchbar } from './Searchbar/Searchbar.jsx';
import { ImageGallery } from './ImageGallery/ImageGallery.jsx';
import './App.css';


export class App extends Component {
  state = {
    query: '',
  }
  
  searchFormSubmitHandler = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <div className= "app">
        <Searchbar onSubmit={this.searchFormSubmitHandler} />
        <ImageGallery query={this.state.query} />
      </div>
    );
  }
}

export default App;