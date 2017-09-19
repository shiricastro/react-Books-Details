import React from 'react';
import axios from 'axios'; 
import{
	Link
} from 'react-router-dom';

export default class Book extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			bookName:"",
			description:"",
			img:""
		}
	}
	inputChange(e){
		this.setState({
			[e.target.id]:e.target.value
		});
	}
	addBook(e){
		e.preventDefault();			
		const {bookName, description, img} = this.state; 
		console.log("we save the values");
		axios.post('http://localhost:3000/books', {
			bookName: bookName,
			description: description,
			img: img
		})
		.then(function (response) {
			this.props.history.push('/Books');
		    console.log(response);		    
		}.bind(this))
		.catch(function (error) {
		    console.log(error);
		});
	}
	render(){
			return <div className="newBook">
			<form>
				<Link to="/Books" className="linkBooks">Back To Books Page</Link>
				<h2>Add New Book</h2>
				<div className="formWrap">
					<div className="wrapLabels">
						<label>
							<span>Name: </span>
							<input type="text" value={this.state.bookName} id="bookName" onChange={e => this.inputChange(e)}/>
						</label>
						<label>
							<span>Img URL: </span>
							<input type="text" value={this.state.img} id="img" onChange={e => this.inputChange(e)}/>
						</label>
						<label>
							<span>Description: </span>
							<textarea rows="4" value={this.state.description} id="description" onChange={e => this.inputChange(e)}></textarea>
						</label>
					</div>
					<img className="formImg" src={this.state.img} alt="New Book Img"/>
				</div>
				<button type="submit" onClick={e => this.addBook(e)}>Add Book</button>								
			</form>			
			</div>
		

	}
}
