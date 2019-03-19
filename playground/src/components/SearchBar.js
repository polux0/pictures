import React from 'react';


class SearchBar extends React.Component{

state = {term: ''}

onInputChange(event){

	console.log(event.target.value)
}
onInputClick(){

	console.log('Input was clicked');

}
onFormSubmit = event => {
	event.preventDefault();
	this.props.onSubmit(this.state.term);
}

	render(){	
		return(

			<div className="ui segment">
				<form onSubmit={this.onFormSubmit} className="ui form">
					<div className="field">
						<label> Image Search </label>
						<input type='text'
						 onChange={e => this.setState({term: e.target.value})} 
						 onClick={this.onInputClick}
						 value={this.state.term} />
					</div>

				</form>
			</div>

		) 


			    
	}
	
}

export default SearchBar;