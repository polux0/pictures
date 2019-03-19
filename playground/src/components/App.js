import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
// api access key - 3bcf0a8ee72843d829c349faf9a45e091f8ac22e5a0061edcbd95d1ad6c071d9
class App extends React.Component {

	state = {images: []};

	onSearchSubmit = async term => {

		const response = await unsplash.get('/search/photos', {
				params: { query: term },

			})

			this.setState({images: response.data.results});

	}

	render(){

		return (

		<div className="ui container" style={{marginTop: '10px'}}>
		 	<SearchBar onSubmit={this.onSearchSubmit}/> 
		 	Found: {this.state.images.length} images
		 	<ImageList images = {this.state.images} />
		</div>
		)

	}

}


export default App;