import React from 'react';
import unsplash from './api/unsplash';
import SearchBar from '@bit/livingmartialway.bitjrdevapp.search-bar';
import ImageList from '@bit/livingmartialway.bitjrdevapp.image-list';
import './app.css'

class App extends React.Component {
  state = { images: [] };

   onTermSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term }

    });

    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="App">
        <legend className="sblegend">bit.dev/livingmartialway/bitjrdevapp/search-bar
          <SearchBar onFormSubmit={this.onTermSubmit}/>
            <legend className="logolegend">bitjrdevapp/logo</legend>
        </legend>

        <legend className="imagelistlegend">bit.dev/livingmartialway/bitjrdevapp/image-list  & image-card
          <ImageList images={this.state.images} />
        </legend>
      </div>
    );
  }
}
export default App;
